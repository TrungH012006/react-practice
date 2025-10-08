"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import { User } from "firebase/auth";

import { initializeFirebase, getUserAuth } from "@/utils/databaseFunctions";
import { getUser } from "@/utils/userFunctions";
import { getPremiumStatus } from "@/utils/stripeFunctions";

// Context Type Definition
type UserContextType = {
  user: User | null | undefined;
  userData: DocumentData | null | undefined;
  isPremium: boolean;
};

// Creating User Context
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export interface Props {
  [key: string]: any;
}

export const UserContextProvider = ({ children, ...props }: Props) => {
  const app = initializeFirebase();
  const auth = getUserAuth(true);
  
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [userData, setUserData] = useState<DocumentData | null | undefined>(
    undefined
  );
  const [isPremium, setIsPremium] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        // Get User Data
        const userDoc = await getUser(firebaseUser.uid);
        
        // Update User States
        setUser(firebaseUser);
        setUserData(userDoc);
        
        // Check Premium Status
        try {
          const premiumStatus = await getPremiumStatus();
          setIsPremium(premiumStatus);
        } catch (error) {
          console.error("Error checking premium status:", error);
          setIsPremium(false);
        }
      } else {
        // Update States During Logout..
        setUser(null);
        setUserData(null);
        setIsPremium(false);
      }
    });
    
    return () => unsubscribe();
  }, [auth]);

  return (
    <UserContext.Provider value={{ user, userData, isPremium }} {...props}>
      {children}
    </UserContext.Provider>
  );
};

// Hook For Accessing User Context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context)
    throw new Error("useUser must be used within a UserContextProvider");
  return context;
};

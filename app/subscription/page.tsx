"use client";

import { useState, useEffect } from "react";
import Subheading from "@/components/common/Subheading"
import Text from "@/components/common/Text";
import { useUser } from "@/providers/UserProvider";
import { signIn, signOut } from "@/utils/databaseFunctions";
import { getCheckoutUrl, getPortalUrl, getPremiumStatus } from "@/utils/stripeFunctions";
import { useRouter } from "next/navigation";

const Subscription = () => {
  const { user, isPremium } = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubscribe = async () => {
    try {
      setIsLoading(true);
      const productId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID;
      
      if (!productId) {
        throw new Error("Stripe price ID is not configured");
      }
      
      const checkoutUrl = await getCheckoutUrl(productId);
      router.push(checkoutUrl);
    } catch (error) {
      console.error("Error upgrading to premium:", error);
      setIsLoading(false);
    }
  };

  const handleManageSubscription = async () => {
    try {
      setIsLoading(true);
      const portalUrl = await getPortalUrl();
      router.push(portalUrl);
    } catch (error) {
      console.error("Error accessing subscription portal:", error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="mx-auto max-w-standard p-standard flex items-center justify-center min-h-[100vh]">
        <div className="text-center">
          <div className="animate-pulse text-primary-600 text-xl mb-2">Loading...</div>
          <p className="default-label text-gray-500">Processing your request</p>
        </div>
      </div>
    );
  }

  return (
    <div className='default-container py-12'>
      <Subheading>Subscription</Subheading>
      {!user ? (
        <div className="mt-4">
          <Text>Please sign in to continue.</Text>
          <button className='mt-4 w-fit px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90' onClick={() => signIn()}>Sign In</button>
        </div>
      ) : isPremium ? (
        <div className="mt-4">
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 rounded-full mr-2 bg-green-500"></div>
            <Text className="text-gray-700">Premium Plan Active</Text>
          </div>
          <Text>Signed in as {user.email}</Text>
          <Text className="text-gray-500 mt-2 mb-4">You are already enjoying all the benefits of our Premium plan.</Text>
          
          <div className="flex flex-col sm:flex-row gap-2 mt-2">
            <button 
              className="w-fit px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90" 
              onClick={handleManageSubscription}
            >
              Manage Subscription
            </button>
            <button className='w-fit px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300' onClick={() => signOut()}>Sign Out</button>
          </div>
        </div>
      ) : (
        <div className="mt-4">
          <Text>Signed in as {user.email}</Text>
          <Text className="text-gray-400 mb-4">Standard Member</Text>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <button 
              className="w-fit px-4 py-2 bg-blue-500 text-white rounded-lg hover:opacity-90" 
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
            <button className='w-fit px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300' onClick={() => signOut()}>Sign Out</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscription;
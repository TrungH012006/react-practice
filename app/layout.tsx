import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { UserContextProvider } from "@/providers/UserProvider";
import ToasterProvider from "@/providers/ToastProvider";

// Configure your fonts!
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_NAME = "Next.js Starter Kit";
const SITE_DESCRIPTION = "A modern, SEO-optimized starter kit for your Next.js projects with pre-built components and responsive design.";
const SITE_URL = "https://your-domain.com";

// SEO Metadata Configuration!
export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `${SITE_NAME} - Modern Web Application Template`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "next.js", 
    "react", 
    "typescript", 
    "tailwind css", 
    "starter kit", 
    "boilerplate", 
    "template"
  ],
  authors: [{ name: "Your Name or Company" }],
  creator: "Your Name or Company",
  publisher: "Your Name or Company",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  // CUSTOMIZE: Update with your actual domain!
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    // CUSTOMIZE: Add Your Actual OG Image!
    images: [
      {
        url: "/images/og-image.jpg", // Public Folder
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} Preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    // CUSTOMIZE: Add your Twitter Handle Without @
    creator: "yourhandle",
    // CUSTOMIZE: Add Your Actual Twitter Image!
    images: ["/images/twitter-image.jpg"], // Public Folder
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Viewport Configuration!
export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <UserContextProvider>
          {children}
          <ToasterProvider />
        </UserContextProvider>
      </body>
    </html>
  );
}

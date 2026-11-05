import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { EnquiryProvider } from "@/context/EnquiryContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RevoDigital — Make Every Connection Count",
  description:
    "Smarter ways to collect customer reviews and share your professional identity. Discover contactless experiences designed for modern businesses.",
  keywords: [
    "RevoDigital",
    "NFC business card",
    "Google review stand",
    "contactless tap card",
    "smart business card",
    "digital identity",
  ],
  authors: [{ name: "RevoDigital" }],
  openGraph: {
    title: "RevoDigital — Make Every Connection Count",
    description:
      "Smarter ways to collect customer reviews and share your professional identity.",
    type: "website",
    url: "https://revodigital.in",
  },
};

export const viewport: Viewport = {
  themeColor: "#14213D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="font-body bg-background text-navy antialiased min-h-screen">
        <EnquiryProvider>{children}</EnquiryProvider>
      </body>
    </html>
  );
}

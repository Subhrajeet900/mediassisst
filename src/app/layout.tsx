import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, Space_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MediaSsisst - The Future of Healthcare, In Your Pocket",
  description: "MediaSsisst connects doctors, patients, and pharmacies into one seamless digital healthcare ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfairDisplay.variable} ${spaceMono.variable} h-full antialiased cursor-none`}
    >
      <body className="min-h-full flex flex-col font-body cursor-none">
        <Cursor />
        {children}
      </body>
    </html>
  );
}

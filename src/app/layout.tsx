import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-mulish",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PI NET Service",
  description: "Pi Network Ecosystem & Wallet Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${mulish.variable}`} suppressHydrationWarning>
      <body className="min-h-full font-mulish antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

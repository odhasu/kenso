import type { Metadata } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const clashGrotesk = localFont({
  src: "../../public/fonts/ClashGrotesk-Variable.woff2",
  variable: "--font-clash-grotesk",
  display: "swap",
  weight: "200 700",
});

const satoshi = localFont({
  src: [
    { path: "../../public/fonts/Satoshi-Light.otf", weight: "300" },
    { path: "../../public/fonts/Satoshi-Regular.otf", weight: "400" },
    { path: "../../public/fonts/Satoshi-Medium.otf", weight: "500" },
    { path: "../../public/fonts/Satoshi-Bold.otf", weight: "700" },
    { path: "../../public/fonts/Satoshi-Black.otf", weight: "900" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kenso - The Ultimate Shopify Theme",
  description:
    "Premium Shopify theme with 140+ features built to convert. One-time purchase, lifetime updates.",
  icons: {
    icon: "/seo/favicon.webp",
    apple: "/seo/favicon.webp",
  },
  other: {
    "theme-color": "#ffffff",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${clashGrotesk.variable} ${satoshi.variable} ${plusJakartaSans.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}

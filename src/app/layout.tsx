import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";
import JsonLdSchema from "@/components/JsonLdSchema";
import { BUSINESS_CONFIG } from "@/config/business";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-noto-devanagari",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#1d4ed8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_CONFIG.siteUrl),
  title: {
    default: "Master Multi Services – Property Documentation, Kharedi Khat & Typing Xerox in Lekha Nagar, CIDCO Nashik",
    template: "%s | Master Multi Services Nashik",
  },
  description:
    "Master Multi Services in Savata Nagar, Lekha Nagar, CIDCO Nashik (422009). 20+ years of expertise in Kharedi Khat (खरेदीखत), CIDCO property transfer, registered rent agreements (भाडेकरार), notary, affidavit preparation, Marathi/English typing, and Xerox.",
  keywords: [
    "Master Multi Services Nashik",
    "CIDCO property documentation Nashik",
    "Kharedi Khat Nashik",
    "खरेदीखत नाशिक",
    "Rent agreement CIDCO Nashik",
    "भाडेकरार लेखा नगर",
    "CIDCO transfer Lekha Nagar",
    "Marathi typing shop CIDCO Nashik",
    "Xerox shop Lekha Nagar",
    "Notary services Savata Nagar CIDCO",
    "Affidavit drafting Nashik",
    "प्रतिज्ञापत्र नाशिक",
    "WhatsApp document printing Nashik",
    "Lekha Nagar CIDCO Nashik 422009"
  ],
  authors: [{ name: BUSINESS_CONFIG.name }],
  creator: BUSINESS_CONFIG.name,
  publisher: BUSINESS_CONFIG.name,
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: "mr_IN",
    url: BUSINESS_CONFIG.siteUrl,
    title: "Master Multi Services – Property Documentation & Typing Xerox in Lekha Nagar, CIDCO Nashik",
    description:
      "Expert Property Documentation, Kharedi Khat (खरेदीखत), CIDCO Transfers, Rent Agreements, Notary & Instant WhatsApp Xerox in Lekha Nagar, CIDCO Nashik.",
    siteName: BUSINESS_CONFIG.name,
  },
  alternates: {
    canonical: BUSINESS_CONFIG.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakartaSans.variable} ${notoDevanagari.variable}`}>
      <head>
        <JsonLdSchema />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        {/* pb-20 on mobile ensures sticky bottom bar never overlaps page content or buttons */}
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}

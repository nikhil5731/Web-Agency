import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebDesign Agency - Professional Web Design & Development Services",
  description: "Transform your business with stunning websites, powerful web applications, and digital solutions that drive results. Award-winning web design and development agency.",
  keywords: "web design, web development, digital agency, website design, mobile apps, e-commerce, UI/UX design",
  authors: [{ name: "WebDesign Agency" }],
  creator: "WebDesign Agency",
  openGraph: {
    title: "WebDesign Agency - Professional Web Design & Development Services",
    description: "Transform your business with stunning websites, powerful web applications, and digital solutions that drive results.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebDesign Agency - Professional Web Design & Development Services",
    description: "Transform your business with stunning websites, powerful web applications, and digital solutions that drive results.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
} 
 
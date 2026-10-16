import type { Metadata } from "next";
import "./globals.css";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: `${business.name} | ${business.category} in ${business.address}`,
  description: business.copy.seoDescription,
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-MY">
      <body>{children}</body>
    </html>
  );
}

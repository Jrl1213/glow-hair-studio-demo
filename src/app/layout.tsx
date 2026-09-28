import type { Metadata } from "next";
import "./globals.css";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: `${business.name} | Hair Salon in ${business.address}`,
  description: `Discover cuts, colour, treatments and easy WhatsApp booking at ${business.name}, a hair salon demo in ${business.address}.`,
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

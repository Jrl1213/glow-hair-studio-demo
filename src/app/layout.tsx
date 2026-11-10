import type { Metadata } from "next";
import "./globals.css";
import { business } from "@/config/business";

const title = `${business.name} | ${business.category} in ${business.address}`;

// Netlify sets these at build time. Link previews need a full image URL,
// and deploy previews should point at their own copy of the image.
const siteUrl =
  (process.env.CONTEXT === "production"
    ? process.env.URL
    : process.env.DEPLOY_PRIME_URL) ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: business.copy.seoDescription,
  robots: { index: false, follow: false }, // Fictional business; remove for a real launch.
  // The preview card shown when the link is shared on LinkedIn, WhatsApp and
  // other apps. The image is src/app/opengraph-image.jpg.
  openGraph: {
    type: "website",
    url: "/",
    siteName: business.name,
    title,
    description: business.copy.seoDescription,
    locale: "en_MY",
  },
  twitter: { card: "summary_large_image" },
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

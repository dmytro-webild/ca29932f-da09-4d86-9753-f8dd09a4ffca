import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito } from "next/font/google";



export const metadata: Metadata = {
  title: 'Marhaba Cafe & Restaurant | Authentic Indian Cuisine & Cozy Ambiance',
  description: 'Experience delicious Indian food in a warm and inviting atmosphere at Marhaba Cafe & Restaurant in New Delhi. Dine-in, takeaway, and catering services available until late night.',
  keywords: ["Marhaba Cafe, Indian restaurant, New Delhi, Shaheen Bagh, authentic Indian food, dine-in, takeaway, best cafe, late night food"],
  openGraph: {
    "title": "Marhaba Cafe & Restaurant | Authentic Indian Cuisine & Cozy Ambiance",
    "description": "Experience delicious Indian food in a warm and inviting atmosphere at Marhaba Cafe & Restaurant in New Delhi. Dine-in, takeaway, and catering services available until late night.",
    "url": "https://marhabacafe.com",
    "siteName": "Marhaba Cafe & Restaurant",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/rustic-chandelier-made-bulbs-ropes-dining-table-vintage-kitchen_181624-9173.jpg",
        "alt": "Marhaba Cafe & Restaurant interior"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Marhaba Cafe & Restaurant | Authentic Indian Cuisine & Cozy Ambiance",
    "description": "Experience delicious Indian food in a warm and inviting atmosphere at Marhaba Cafe & Restaurant in New Delhi. Dine-in, takeaway, and catering services available until late night.",
    "images": [
      "http://img.b2bpic.net/free-photo/rustic-chandelier-made-bulbs-ropes-dining-table-vintage-kitchen_181624-9173.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunito.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}

import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'شركة التسويق الرقمي | نمو أعمالك على الإنترنت',
  description: 'حلول تسويقية مبتكرة وشاملة لتعزيز حضور علامتك التجارية رقمياً وتحقيق أهداف عملك. خبراء في SEO، وسائل التواصل الاجتماعي، والمحتوى.',
  keywords: ["تسويق رقمي، SEO، وسائل التواصل الاجتماعي، محتوى، إعلانات مدفوعة، تصميم مواقع، تحليلات، السعودية، الرياض، وكالة تسويق"],
  openGraph: {
    "title": "شركة التسويق الرقمي | نمو أعمالك على الإنترنت",
    "description": "حلول تسويقية مبتكرة وشاملة لتعزيز حضور علامتك التجارية رقمياً وتحقيق أهداف عملك.",
    "url": "https://www.yourdomain.com",
    "siteName": "شركة التسويق الرقمي",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/analytics-plan-strategy-insight-concept_53876-124214.jpg",
        "alt": "فريق تسويق رقمي يعمل على لوحات تحكم"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "شركة التسويق الرقمي | نمو أعمالك على الإنترنت",
    "description": "حلول تسويقية مبتكرة وشاملة لتعزيز حضور علامتك التجارية رقمياً.",
    "images": [
      "http://img.b2bpic.net/free-photo/analytics-plan-strategy-insight-concept_53876-124214.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const openSans = Open_Sans({
  variable: "--font-open-sans",
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
        <body className={`${openSans.variable} antialiased`}>
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

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Danmotion Video Editing Course",
  description: "Lộ trình cho Video Editor hướng tới client quốc tế & thu nhập $1000+",
  openGraph: {
    title: "Danmotion Video Editing Course",
    description: "Lộ trình cho Video Editor hướng tới client quốc tế & thu nhập $1000+",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Danmotion Video Editing Course",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danmotion Video Editing Course",
    description: "Lộ trình cho Video Editor hướng tới client quốc tế & thu nhập $1000+",
    images: ["/thumbnail.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}

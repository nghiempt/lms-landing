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
  title: "VIDEO EDITOR — Khóa học Video Editor quốc tế",
  description:
    "Lộ trình cho Video Editor hướng tới client quốc tế & thu nhập $1000+. Khóa học đầu tiên tại Việt Nam tập trung vào style edit kiểu Apple & Devin Jatho — dạng video đang được nhiều khách hàng quốc tế trả giá cao.",
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

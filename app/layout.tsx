import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "静态网站定制 | 简单省钱，一次付款永久拥有",
  description: "专业静态网站定制服务。不用买服务器，不用年年续费，打开快、不怕黑客、搜索引擎友好。一次付款，网站永久归你。",
  keywords: ["静态网站", "网站定制", "网页设计", "企业官网", "落地页"],
  authors: [{ name: "Static Web" }],
  openGraph: {
    title: "静态网站定制 | 简单省钱",
    description: "不用买服务器，不用年年续费。一次付款，网站永久归你。",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "静态网站定制 | 简单省钱",
    description: "不用买服务器，不用年年续费。一次付款，网站永久归你。",
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
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Header } from "../components/Header";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  title: "100個のアプリを自己開発して月収１００万円への挑戦",
  description: "アプリ開発100個を目指して、月収100万円を達成するまでの軌跡を記録するサイトです。",
  keywords: ["アプリ開発", "個人開発", "プログラミング", "起業", "チャレンジ"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansJP.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

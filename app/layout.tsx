import type { Metadata } from "next";
import { Fraunces, Geist_Mono } from "next/font/google";
import { pretendard } from "@/src/fonts/pretendard";
import "./globals.css";
import QueryProvider from "@/src/components/query-provider";
import { cn } from "@/lib/utils";

const fraunces = Fraunces({
  weight: ["500"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const geistMono = Geist_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "xpf — eXtra Profile",
  description:
    "X 프로필만으로는 부족한 당신을 위해. 링크, 프리셋, 기록을 한 곳에.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={cn(
        "h-full antialiased font-sans",
        pretendard.variable,
        fraunces.variable,
        geistMono.variable,
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}

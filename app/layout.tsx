import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { pretendard } from "@/src/fonts/pretendard";
import "./globals.css";
import QueryProvider from "@/src/components/query-provider";
import { cn } from "@/lib/utils";

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
        geistMono.variable,
      )}
    >
      <head>
        {/* 디스플레이·헤드라인 = SUIT (CDN · SIL OFL). 본문 Pretendard는 자가호스팅(next/font/local).
            dt/mn 과 동일한 타이포 조합. */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/sun-typeface/SUIT/fonts/variable/woff2/SUIT.css"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}

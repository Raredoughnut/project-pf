"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

// 원본: .original/kits/xpf.html 의 .xpf-topbar (MainLayout.tsx)
type NavItem = {
  label: string;
  href?: string;
  onClick?: () => void;
};

type Props = {
  /** 인증된 사용자용 네비게이션(내 프로필/편집/로그아웃) 노출 여부 */
  authed?: boolean;
  children: React.ReactNode;
};

export function MainLayout({ authed = true, children }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const navItems: NavItem[] = authed
    ? [
        { label: "홈", href: "/" },
        { label: "내 프로필", href: "/me" },
        { label: "프로필 편집", href: "/me/edit" },
        { label: "로그아웃", onClick: () => router.push("/login") },
      ]
    : [
        { label: "홈", href: "/" },
        { label: "로그인", href: "/login" },
      ];

  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="h-12 border-b border-border flex justify-center items-center bg-background sticky top-0 z-10">
        <div className="w-full max-w-[720px] px-6 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-[13px] font-bold cursor-pointer"
          >
            <Image
              src="/assets/logo.png"
              alt="xpf"
              width={20}
              height={20}
              className="rounded"
            />
            XPF Beta
          </Link>

          <nav className="flex gap-1 items-center">
            {navItems.map((item) => {
              const isActive = item.href ? pathname === item.href : false;
              const className = cn(
                "bg-transparent border-none cursor-pointer font-sans text-[13px] text-foreground px-2.5 py-1.5 rounded-md transition-colors hover:bg-secondary",
                isActive && "text-rd-orange-600 font-semibold"
              );

              if (item.href) {
                return (
                  <Link key={item.label} href={item.href} className={className}>
                    {item.label}
                  </Link>
                );
              }

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={item.onClick}
                  className={className}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto flex flex-col items-center">
        <div className="w-full max-w-[720px]">{children}</div>
      </main>
    </div>
  );
}

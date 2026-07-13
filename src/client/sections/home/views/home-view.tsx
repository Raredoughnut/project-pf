import { Button } from "@/components/ui/button";
import type { HomeData } from "@/src/client/sections/home/types";
import { Link } from "lucide-react";

interface HomeViewProps {
  data: HomeData;
}

/**
 * 메인 화면 (프레젠테이션). props(HomeData)만 받아 그린다.
 * 모바일 우선 · 최대 너비 1440px 반응형.
 */
export function HomeView({ data }: HomeViewProps) {
  return (
    <div className="flex min-h-[calc(100svh-3.5rem)] flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icons/opf-logo.svg"
        alt="opf-logo"
        style={{ color: "#b57a0e" }}
        className="h-16 w-auto"
      />

      <p className="text-lg font-bold text-primary-darker sm:text-xl">
        O.pf로 나를 더욱 더 표현해보세요!
      </p>
      <Button>로그인하기</Button>
    </div>
  );
}

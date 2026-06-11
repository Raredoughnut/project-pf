import type { Profile } from "@/src/types";

// 원본 디자인(.original/kits/xpf.html)의 데모 데이터를 mock으로 재현.
// 실제 백엔드 연동 시 src/server 계층으로 교체한다.

export const MY_PROFILE: Profile = {
  id: "me",
  handle: "onehunnitconst",
  displayName: "쉐프 도넛",
  bio: "리듬게임 좋아합니다. maimai DX 14+ 위주로 연습 중.\n도넛 가게 주인장이기도 합니다 🍩",
  avatarText: "쉐프",
  avatarColor: "var(--color-rd-orange-500)",
  headerBackground:
    "radial-gradient(circle at 20% 40%, oklch(0.80 0.13 55 / 0.8) 0%, transparent 40%)," +
    "radial-gradient(circle at 80% 60%, oklch(0.82 0.09 165 / 0.6) 0%, transparent 45%)," +
    "linear-gradient(135deg, var(--color-rd-dough-600), var(--color-rd-dough-800))",
  stats: {
    linkCount: 12,
    visits: 48,
    joinedLabel: "2026년 1월 가입",
  },
  links: [
    {
      id: "soundcloud",
      label: "SoundCloud",
      url: "soundcloud.com/raredoughnut",
      category: "MUSIC",
      icon: "music",
      iconBg: "oklch(0.92 0.04 20)",
      iconColor: "oklch(0.45 0.18 25)",
    },
    {
      id: "instagram",
      label: "Instagram",
      url: "instagram.com/ohc.donut",
      category: "SOCIAL",
      icon: "instagram",
      iconBg: "oklch(0.94 0.05 95)",
      iconColor: "oklch(0.50 0.14 80)",
    },
    {
      id: "maimai",
      label: "maimai 플레이 기록",
      url: "otogedojo.onehunnitconst.kr/u/ohc",
      category: "GAME",
      icon: "game",
      iconBg: "oklch(0.92 0.03 160)",
      iconColor: "oklch(0.48 0.12 160)",
    },
    {
      id: "github",
      label: "GitHub",
      url: "github.com/onehunnitconst",
      category: "DEV",
      icon: "github",
      iconBg: "oklch(0.92 0.03 260)",
      iconColor: "oklch(0.48 0.14 260)",
    },
    {
      id: "blog",
      label: "Blog — today-i-learned",
      url: "ohcdev.onehunnitconst.kr",
      category: "WRITE",
      icon: "write",
      iconBg: "var(--color-rd-cream-100)",
    },
  ],
};

const YURI_PROFILE: Profile = {
  id: "yuri",
  handle: "yuri_sdvx",
  displayName: "유리 ユリ",
  bio: "SDVX Hierophant · iidx 皆伝. 츠이토로 곡 리뷰합니다.",
  avatarText: "Y",
  avatarColor: "var(--color-rd-sprinkle-grape)",
  headerBackground:
    "radial-gradient(circle at 20% 30%, oklch(0.82 0.09 165 / 0.8) 0%, transparent 45%)," +
    "radial-gradient(circle at 80% 70%, oklch(0.78 0.15 10 / 0.7) 0%, transparent 45%)," +
    "linear-gradient(135deg, var(--color-rd-sprinkle-sky), var(--color-rd-sprinkle-grape))",
  stats: {
    linkCount: 9,
    visits: 1200,
  },
  links: [
    {
      id: "arcade-songs",
      label: "SDVX arcade-songs profile",
      url: "arcade-songs.zetaraku.dev/sdvx/?u=yuri",
      category: "GAME",
      icon: "game",
      iconBg: "oklch(0.92 0.04 305)",
      iconColor: "oklch(0.50 0.18 305)",
    },
    {
      id: "youtube",
      label: "YouTube — 플레이 영상",
      url: "youtube.com/@yuri_sdvx",
      category: "VIDEO",
      icon: "video",
      iconBg: "oklch(0.92 0.03 180)",
      iconColor: "oklch(0.45 0.12 180)",
    },
    {
      id: "instagram",
      label: "Instagram",
      url: "instagram.com/yuri.sdvx",
      category: "SOCIAL",
      icon: "instagram",
      iconBg: "oklch(0.94 0.04 95)",
      iconColor: "oklch(0.50 0.14 80)",
    },
  ],
};

const PUBLIC_PROFILES: Record<string, Profile> = {
  yuri: YURI_PROFILE,
  yuri_sdvx: YURI_PROFILE,
  onehunnitconst: MY_PROFILE,
};

export function findPublicProfile(id: string): Profile | null {
  return PUBLIC_PROFILES[id] ?? null;
}

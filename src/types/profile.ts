// 원본: .original/kits/xpf.html 의 프로필/링크 아이템 구조

export type LinkIconKey =
  | "music"
  | "instagram"
  | "game"
  | "github"
  | "write"
  | "video"
  | "link";

export type LinkCategory =
  | "MUSIC"
  | "SOCIAL"
  | "GAME"
  | "DEV"
  | "WRITE"
  | "VIDEO";

export type LinkItem = {
  id: string;
  label: string;
  url: string;
  category: LinkCategory;
  icon: LinkIconKey;
  /** 아이콘 배경/전경 색 (CSS color). 미지정 시 크림 톤 기본값 사용 */
  iconBg?: string;
  iconColor?: string;
};

export type ProfileStats = {
  linkCount: number;
  visits: number;
  /** 가입 시점 라벨 (예: "2026년 1월 가입") */
  joinedLabel?: string;
};

export type Profile = {
  id: string;
  handle: string;
  displayName: string;
  bio: string;
  /** 아바타 이미지가 없을 때 표시할 텍스트 */
  avatarText: string;
  /** 아바타 배경 CSS color */
  avatarColor: string;
  /** 헤더 히어로 배경 (CSS background 값) */
  headerBackground: string;
  stats: ProfileStats;
  links: LinkItem[];
};

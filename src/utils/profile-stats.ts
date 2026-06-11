import type { Profile } from "@/src/types";
import type { ProfileStatItem } from "@/src/components/profile/profile-hero";
import { formatCompactNumber } from "./format-number";

// 내 프로필: 링크/방문/가입을 개별 항목으로 표시
export function buildMyStatItems(profile: Profile): ProfileStatItem[] {
  const items: ProfileStatItem[] = [
    { value: String(profile.stats.linkCount), label: "개의 링크" },
    { value: formatCompactNumber(profile.stats.visits), label: "회 방문" },
  ];

  if (profile.stats.joinedLabel) {
    items.push({ label: profile.stats.joinedLabel });
  }

  return items;
}

// 공개 프로필: "N개의 링크 · M회 방문" 형태(가운데 점 구분)
export function buildPublicStatItems(profile: Profile): ProfileStatItem[] {
  return [
    { value: String(profile.stats.linkCount), label: "개의 링크 ·" },
    { value: formatCompactNumber(profile.stats.visits), label: "회 방문" },
  ];
}

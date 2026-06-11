import { useQuery } from "@tanstack/react-query";

import type { Profile } from "@/src/types";
import { findPublicProfile } from "@/src/client/mock/profiles";

// mock: 실제 API 연동 시 fetch(`/api/u/${id}`) 등으로 교체
async function fetchPublicProfile(id: string): Promise<Profile> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const profile = findPublicProfile(id);
  if (!profile) {
    throw new Error("프로필을 찾을 수 없습니다.");
  }
  return profile;
}

export function usePublicProfile(id: string) {
  return useQuery({
    queryKey: ["public-profile", id],
    queryFn: () => fetchPublicProfile(id),
    enabled: id.length > 0,
  });
}

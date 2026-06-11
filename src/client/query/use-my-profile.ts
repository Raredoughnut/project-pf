import { useQuery } from "@tanstack/react-query";

import type { Profile } from "@/src/types";
import { MY_PROFILE } from "@/src/client/mock/profiles";

// mock: 실제 API 연동 시 fetch("/api/me") 등으로 교체
async function fetchMyProfile(): Promise<Profile> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return MY_PROFILE;
}

export function useMyProfile() {
  return useQuery({
    queryKey: ["my-profile"],
    queryFn: fetchMyProfile,
  });
}

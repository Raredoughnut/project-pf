"use client";

import { usePublicProfile } from "@/src/client/query/use-public-profile";
import { buildPublicStatItems } from "@/src/utils/profile-stats";

export function usePublicProfileVM(id: string) {
  const { data: profile, isLoading, isError, error } = usePublicProfile(id);

  const viewProps = profile
    ? {
        profile,
        statItems: buildPublicStatItems(profile),
      }
    : null;

  const handleFollow = () => {
    if (!profile) return;
    window.open(`https://x.com/${profile.handle}`, "_blank", "noopener");
  };

  return {
    isLoading,
    errorMessage: isError
      ? error instanceof Error
        ? error.message
        : "프로필을 불러오지 못했습니다."
      : "",
    viewProps,
    onFollow: handleFollow,
  };
}

export type PublicProfileVM = ReturnType<typeof usePublicProfileVM>;

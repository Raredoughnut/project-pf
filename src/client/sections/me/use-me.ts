"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useMyProfile } from "@/src/client/query/use-my-profile";
import { buildMyStatItems } from "@/src/utils/profile-stats";
import type { ProfileTabKey } from "@/src/components/profile/profile-tabs";

export function useMe() {
  const { data: profile, isLoading, isError } = useMyProfile();
  const [activeTab, setActiveTab] = useState<ProfileTabKey>("links");
  const router = useRouter();

  const viewProps = profile
    ? {
        profile,
        statItems: buildMyStatItems(profile),
      }
    : null;

  return {
    isLoading,
    errorMessage: isError ? "프로필을 불러오지 못했습니다." : "",
    viewProps,
    activeTab,
    onTabChange: setActiveTab,
    onEdit: () => router.push("/me/edit"),
  };
}

export type MeVM = ReturnType<typeof useMe>;

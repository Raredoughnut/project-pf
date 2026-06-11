"use client";

import { useMyProfile } from "@/src/client/query/use-my-profile";
import { MeEditFormContainer } from "./me-edit-form-container";
import { LoadingView } from "@/src/client/sections/loading/loading-view";
import { DataErrorView } from "@/src/client/sections/error/views/data-error-view";

export function MeEditContainer() {
  const { data: profile, isLoading, isError } = useMyProfile();

  if (isError) {
    return <DataErrorView message="프로필을 불러오지 못했습니다." />;
  }

  if (isLoading || !profile) {
    return <LoadingView />;
  }

  return <MeEditFormContainer profile={profile} />;
}

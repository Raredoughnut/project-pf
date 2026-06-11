"use client";

import { usePublicProfileVM } from "./use-public-profile-vm";
import { PublicProfileView } from "@/src/client/sections/public-profile/views/public-profile-view";
import { LoadingView } from "@/src/client/sections/loading/loading-view";
import { DataErrorView } from "@/src/client/sections/error/views/data-error-view";

type Props = {
  id: string;
};

export function PublicProfileContainer({ id }: Props) {
  const { isLoading, errorMessage, viewProps, onFollow } =
    usePublicProfileVM(id);

  if (errorMessage) {
    return <DataErrorView message={errorMessage} />;
  }

  if (isLoading || !viewProps) {
    return <LoadingView />;
  }

  return <PublicProfileView {...viewProps} onFollow={onFollow} />;
}

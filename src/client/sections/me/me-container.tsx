"use client";

import { useMe } from "./use-me";
import { MeView } from "@/src/client/sections/me/views/me-view";
import { LoadingView } from "@/src/client/sections/loading/loading-view";
import { DataErrorView } from "@/src/client/sections/error/views/data-error-view";

export function MeContainer() {
  const { isLoading, errorMessage, viewProps, activeTab, onTabChange, onEdit } =
    useMe();

  if (errorMessage) {
    return <DataErrorView message={errorMessage} />;
  }

  if (isLoading || !viewProps) {
    return <LoadingView />;
  }

  return (
    <MeView
      {...viewProps}
      activeTab={activeTab}
      onTabChange={onTabChange}
      onEdit={onEdit}
    />
  );
}

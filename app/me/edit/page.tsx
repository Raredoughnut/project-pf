import { Suspense } from "react";

import { MainLayout } from "@/src/client/layouts/main-layout";
import { MeEditContainer } from "@/src/client/sections/me-edit/me-edit-container";

export const metadata = {
  title: "xpf :: 프로필 편집",
};

export default function MeEditPage() {
  return (
    <MainLayout authed>
      <Suspense>
        <MeEditContainer />
      </Suspense>
    </MainLayout>
  );
}

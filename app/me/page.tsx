import { Suspense } from "react";

import { MainLayout } from "@/src/client/layouts/main-layout";
import { MeContainer } from "@/src/client/sections/me/me-container";

export const metadata = {
  title: "xpf :: 내 프로필",
};

export default function MePage() {
  return (
    <MainLayout authed>
      <Suspense>
        <MeContainer />
      </Suspense>
    </MainLayout>
  );
}

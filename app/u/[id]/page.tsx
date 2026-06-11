import { Suspense } from "react";

import { MainLayout } from "@/src/client/layouts/main-layout";
import { PublicProfileContainer } from "@/src/client/sections/public-profile/public-profile-container";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PublicProfilePage({ params }: Props) {
  const { id } = await params;

  return (
    <MainLayout authed={false}>
      <Suspense>
        <PublicProfileContainer id={id} />
      </Suspense>
    </MainLayout>
  );
}

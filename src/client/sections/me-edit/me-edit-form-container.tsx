"use client";

import type { Profile } from "@/src/types";
import { useMeEditVM } from "./use-me-edit-vm";
import { MeEditView } from "@/src/client/sections/me-edit/views/me-edit-view";

type Props = {
  profile: Profile;
};

// 프로필 데이터가 로드된 뒤에만 마운트되어 폼 초기값을 확정한다.
export function MeEditFormContainer({ profile }: Props) {
  const vm = useMeEditVM(profile);

  return <MeEditView {...vm} />;
}

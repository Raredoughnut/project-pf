import { useMutation, useQueryClient } from "@tanstack/react-query";

import type { Profile } from "@/src/types";
import { MY_PROFILE } from "@/src/client/mock/profiles";

export type ProfileEditInput = {
  displayName: string;
  handle: string;
  bio: string;
};

// mock: 실제 API 연동 시 fetch("/api/me", { method: "PUT" }) 등으로 교체
async function updateMyProfile(input: ProfileEditInput): Promise<Profile> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return {
    ...MY_PROFILE,
    displayName: input.displayName,
    handle: input.handle.replace(/^@/, ""),
    bio: input.bio,
  };
}

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateMyProfile,
    onSuccess: (profile) => {
      queryClient.setQueryData(["my-profile"], profile);
    },
  });
}

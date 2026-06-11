"use client";

import { useForm } from "@tanstack/react-form";
import { useRouter } from "next/navigation";

import type { Profile } from "@/src/types";
import { useUpdateProfile } from "@/src/client/query/use-update-profile";

const NICKNAME_MAX_LENGTH = 30;

export function useMeEditVM(profile: Profile) {
  const router = useRouter();
  const { mutate: updateProfile, isPending: isSaving } = useUpdateProfile();

  const form = useForm({
    defaultValues: {
      displayName: profile.displayName,
      handle: profile.handle.startsWith("@")
        ? profile.handle
        : `@${profile.handle}`,
      bio: profile.bio,
    },
    onSubmit: ({ value }) => {
      updateProfile(value, {
        onSuccess: () => {
          router.push("/me");
          router.refresh();
        },
      });
    },
  });

  return {
    form,
    profile,
    isSaving,
    nicknameMaxLength: NICKNAME_MAX_LENGTH,
    onSave: () => form.handleSubmit(),
    onCancel: () => router.push("/me"),
  };
}

export type MeEditVM = ReturnType<typeof useMeEditVM>;

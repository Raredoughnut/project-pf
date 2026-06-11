"use client";

import { useForm } from "@tanstack/react-form";
import { useRouter } from "next/navigation";

import { useLogin } from "@/src/client/query/use-login";

export function useLoginVM() {
  const { login, isLoginPending, message } = useLogin();
  const router = useRouter();

  const credentialsForm = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    onSubmit: ({ value }) => {
      login({ username: value.username, password: value.password });
    },
  });

  const handleSubmit = () => {
    credentialsForm.handleSubmit();
  };

  // mock: X OAuth 대신 데모용으로 바로 내 프로필로 이동
  const handleContinueWithX = () => {
    router.push("/me");
  };

  return {
    credentialsForm,
    isLoginPending,
    message,
    onSubmit: handleSubmit,
    onContinueWithX: handleContinueWithX,
  };
}

export type LoginVM = ReturnType<typeof useLoginVM>;

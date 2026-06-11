import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

export type LoginInput = {
  username: string;
  password: string;
};

// mock: 실제 API 연동 시 fetch("/api/login", { method: "POST" }) 등으로 교체
async function login(input: LoginInput): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  if (!input.username || !input.password) {
    throw new Error("아이디와 비밀번호를 모두 입력해주세요.");
  }
}

export function useLogin() {
  const [message, setMessage] = useState("");
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: login,
    onMutate: () => {
      setMessage("");
    },
    onSuccess: () => {
      router.push("/me");
      router.refresh();
    },
    onError: (error: unknown) => {
      const fallback = "아이디 또는 비밀번호가 올바르지 않습니다.";
      setMessage(error instanceof Error ? error.message : fallback);
    },
  });

  return {
    login: loginMutation.mutate,
    isLoginPending: loginMutation.isPending,
    message,
  };
}

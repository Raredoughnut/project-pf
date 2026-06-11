"use client";

import { useLoginVM } from "./use-login-vm";
import { LoginView } from "@/src/client/sections/login/views/login-view";

export function LoginContainer() {
  const vm = useLoginVM();

  return <LoginView {...vm} />;
}

"use client";

import Image from "next/image";

import type { LoginVM } from "@/src/client/sections/login/use-login-vm";
import { Button } from "@/components/ui/button";
import { XLogo } from "@/src/components/profile/x-logo";
import { LoginField } from "../components/login-field";

export type LoginViewProps = LoginVM;

export function LoginView({
  credentialsForm,
  isLoginPending,
  message,
  onSubmit,
  onContinueWithX,
}: LoginViewProps) {
  return (
    <div className="px-6 py-16 flex flex-col items-center">
      <Image
        src="/assets/logo.png"
        alt="xpf"
        width={72}
        height={72}
        className="rounded-[18px] mb-5"
      />
      <h2 className="font-display font-medium text-[28px] tracking-tight m-0 mb-2 text-center">
        eXtra Profile
      </h2>
      <p className="text-muted-foreground m-0 mb-7 text-center text-sm">
        X 프로필만으로는 부족한 당신을 위해.
        <br />
        링크, 프리셋, 기록을 한 곳에.
      </p>

      <form
        className="w-full max-w-[360px] flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <credentialsForm.Field name="username">
          {(field) => (
            <LoginField
              id="username"
              label="X 계정 아이디"
              type="text"
              autoComplete="username"
              placeholder="@onehunnitconst"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
            />
          )}
        </credentialsForm.Field>

        <credentialsForm.Field name="password">
          {(field) => (
            <LoginField
              id="password"
              label="비밀번호"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
            />
          )}
        </credentialsForm.Field>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="mt-1"
          disabled={isLoginPending}
        >
          {isLoginPending ? "로그인 중…" : "로그인"}
        </Button>

        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={onContinueWithX}
        >
          <XLogo className="w-4 h-4" />X 계정으로 계속하기
        </Button>

        {message ? (
          <p className="text-[13px] text-destructive text-center mt-1">
            {message}
          </p>
        ) : null}

        <div className="mt-5 text-xs text-muted-foreground text-center">
          아직 계정이 없으신가요?{" "}
          <a href="#" className="text-primary">
            회원가입
          </a>
        </div>
      </form>
    </div>
  );
}

import { MainLayout } from "@/src/client/layouts/main-layout";
import { LoginContainer } from "@/src/client/sections/login/login-container";

export const metadata = {
  title: "xpf :: 로그인",
};

export default function LoginPage() {
  return (
    <MainLayout authed={false}>
      <LoginContainer />
    </MainLayout>
  );
}

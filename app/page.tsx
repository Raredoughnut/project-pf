import { redirect } from "next/navigation";

export default function Home() {
  // 데모: 홈 진입 시 내 프로필로 이동
  redirect("/me");
}

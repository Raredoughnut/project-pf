import { cn } from "@/lib/utils";

// 원본: .original/kits/xpf.html 의 .xpf-editor__section
type Props = {
  label: string;
  children: React.ReactNode;
  /** 우측 트레일링 슬롯 (버튼/캡션/배지). 없으면 라벨/필드 2열 구성 */
  trailing?: React.ReactNode;
  /** 행 정렬 (자기소개처럼 위 정렬이 필요한 경우 "start") */
  align?: "center" | "start";
};

export function EditorSection({
  label,
  children,
  trailing,
  align = "center",
}: Props) {
  return (
    <div
      className={cn(
        "grid gap-3.5 bg-rd-cream-50 border border-border rounded-lg p-4 mb-3",
        trailing ? "grid-cols-[120px_1fr_auto]" : "grid-cols-[120px_1fr]",
        align === "start" ? "items-start" : "items-center"
      )}
    >
      <p
        className={cn(
          "text-[13px] font-semibold m-0",
          align === "start" && "pt-2"
        )}
      >
        {label}
      </p>
      <div className="min-w-0">{children}</div>
      {trailing ? <div>{trailing}</div> : null}
    </div>
  );
}

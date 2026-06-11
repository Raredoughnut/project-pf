import { cn } from "@/lib/utils";

// 원본: .original/kits/xpf.html 의 .xpf-tabs
export type ProfileTabKey = "links" | "presets" | "stats";

const TABS: { key: ProfileTabKey; label: string }[] = [
  { key: "links", label: "링크" },
  { key: "presets", label: "프리셋" },
  { key: "stats", label: "통계" },
];

type Props = {
  activeTab: ProfileTabKey;
  onTabChange: (tab: ProfileTabKey) => void;
};

export function ProfileTabs({ activeTab, onTabChange }: Props) {
  return (
    <div className="flex border-b border-border mt-6">
      {TABS.map((tab) => (
        <button
          key={tab.key}
          type="button"
          onClick={() => onTabChange(tab.key)}
          className={cn(
            "px-4 py-3 text-[13px] font-semibold cursor-pointer border-b-2 border-transparent transition-colors",
            activeTab === tab.key
              ? "text-foreground border-rd-orange-500"
              : "text-muted-foreground"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

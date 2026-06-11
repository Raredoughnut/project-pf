import { Avatar } from "@/components/ui/avatar";

// 원본: .original/kits/xpf.html 의 .xpf-header-image + .xpf-profile-meta
export type ProfileStatItem = {
  /** 강조 표시할 수치 (없으면 라벨만 표시) */
  value?: string;
  label: string;
};

type Props = {
  headerBackground: string;
  avatarText: string;
  avatarColor: string;
  displayName: string;
  handle: string;
  bio: string;
  statItems: ProfileStatItem[];
  /** 아바타 우측 액션 영역 (편집 / 팔로우 버튼 등) */
  action?: React.ReactNode;
};

export function ProfileHero({
  headerBackground,
  avatarText,
  avatarColor,
  displayName,
  handle,
  bio,
  statItems,
  action,
}: Props) {
  return (
    <>
      <div
        className="h-40 relative"
        style={{ background: headerBackground }}
      />

      <div className="px-6 pb-6 relative">
        <div className="relative -mt-14 flex justify-between items-end">
          <Avatar
            size="xl"
            fallback={avatarText}
            className="font-display font-medium text-white shadow-[var(--shadow-rd-sm)]"
            style={{ background: avatarColor }}
          />
          {action ? <div className="mb-1">{action}</div> : null}
        </div>

        <h1 className="text-[22px] font-bold tracking-tight mt-4 mb-0.5">
          {displayName}
        </h1>
        <div className="font-mono text-[13px] text-muted-foreground">
          @{handle}
        </div>
        <p className="text-sm leading-relaxed mt-2.5 max-w-[520px] whitespace-pre-line">
          {bio}
        </p>

        <div className="flex gap-4 mt-3.5 text-[13px] text-muted-foreground">
          {statItems.map((item, index) => (
            <span key={index}>
              {item.value ? (
                <b className="text-foreground font-bold mr-[3px]">
                  {item.value}
                </b>
              ) : null}
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

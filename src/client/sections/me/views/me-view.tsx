"use client";

import type { Profile } from "@/src/types";
import { Button } from "@/components/ui/button";
import {
  ProfileHero,
  type ProfileStatItem,
} from "@/src/components/profile/profile-hero";
import {
  ProfileTabs,
  type ProfileTabKey,
} from "@/src/components/profile/profile-tabs";
import { LinkList } from "@/src/components/profile/link-list";

type Props = {
  profile: Profile;
  statItems: ProfileStatItem[];
  activeTab: ProfileTabKey;
  onTabChange: (tab: ProfileTabKey) => void;
  onEdit: () => void;
};

export function MeView({
  profile,
  statItems,
  activeTab,
  onTabChange,
  onEdit,
}: Props) {
  return (
    <div>
      <ProfileHero
        headerBackground={profile.headerBackground}
        avatarText={profile.avatarText}
        avatarColor={profile.avatarColor}
        displayName={profile.displayName}
        handle={profile.handle}
        bio={profile.bio}
        statItems={statItems}
        action={
          <Button variant="outline" size="sm" onClick={onEdit}>
            편집
          </Button>
        }
      />

      <ProfileTabs activeTab={activeTab} onTabChange={onTabChange} />

      {activeTab === "links" ? (
        <LinkList links={profile.links} />
      ) : (
        <div className="px-6 py-16 text-center text-[13px] text-muted-foreground">
          {activeTab === "presets"
            ? "아직 등록된 프리셋이 없습니다."
            : "통계가 곧 제공됩니다."}
        </div>
      )}
    </div>
  );
}

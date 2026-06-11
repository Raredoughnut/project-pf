"use client";

import type { Profile } from "@/src/types";
import { Button } from "@/components/ui/button";
import {
  ProfileHero,
  type ProfileStatItem,
} from "@/src/components/profile/profile-hero";
import { LinkList } from "@/src/components/profile/link-list";
import { XLogo } from "@/src/components/profile/x-logo";

type Props = {
  profile: Profile;
  statItems: ProfileStatItem[];
  onFollow: () => void;
};

export function PublicProfileView({ profile, statItems, onFollow }: Props) {
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
          <Button variant="primary" size="sm" onClick={onFollow}>
            <XLogo className="w-3.5 h-3.5" />
            X에서 팔로우
          </Button>
        }
      />

      <LinkList links={profile.links} />
    </div>
  );
}

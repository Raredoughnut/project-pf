import type { LinkItem } from "@/src/types";
import { LinkItemCard } from "./link-item-card";

// 원본: .original/kits/xpf.html 의 .xpf-items
type Props = {
  links: LinkItem[];
};

export function LinkList({ links }: Props) {
  return (
    <div className="px-6 pt-4 pb-10 flex flex-col gap-2.5">
      {links.map((link) => (
        <LinkItemCard key={link.id} link={link} />
      ))}
    </div>
  );
}

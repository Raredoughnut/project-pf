import type { LinkItem } from "@/src/types";
import { LinkIcon } from "./link-icon";

// 원본: .original/kits/xpf.html 의 .xpf-item
type Props = {
  link: LinkItem;
};

export function LinkItemCard({ link }: Props) {
  const href = link.url.startsWith("http") ? link.url : `https://${link.url}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3.5 px-4 py-3.5 bg-card border border-border rounded-lg cursor-pointer transition-[background,border-color,transform] duration-150 hover:border-rd-cream-200 hover:bg-rd-cream-100"
    >
      <div
        className="w-10 h-10 rounded-[10px] shrink-0 flex items-center justify-center bg-rd-cream-100 text-rd-dough-800"
        style={{ background: link.iconBg, color: link.iconColor }}
      >
        <LinkIcon icon={link.icon} className="w-5 h-5" />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold m-0">{link.label}</p>
        <p className="text-xs text-muted-foreground font-mono mt-0.5 truncate">
          {link.url}
        </p>
      </div>

      <span className="text-[10px] font-bold tracking-[0.06em] uppercase px-2 py-[3px] rounded-full bg-rd-cream-100 text-rd-dough-600">
        {link.category}
      </span>
    </a>
  );
}

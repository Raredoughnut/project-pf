import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// 원본: .original/shared/components.css 의 .rd-avatar 계열
const avatarVariants = cva(
  "inline-flex items-center justify-center rounded-full overflow-hidden bg-secondary text-muted-foreground font-bold shrink-0",
  {
    variants: {
      size: {
        sm: "w-7 h-7 text-[11px]",
        md: "w-10 h-10 text-sm",
        lg: "w-[72px] h-[72px] text-2xl",
        xl: "w-28 h-28 text-4xl border-4 border-card",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

type AvatarProps = React.ComponentProps<"div"> &
  VariantProps<typeof avatarVariants> & {
    src?: string | null;
    alt?: string;
    fallback?: React.ReactNode;
  };

function Avatar({
  className,
  size,
  src,
  alt = "",
  fallback,
  style,
  ...props
}: AvatarProps) {
  return (
    <div
      data-slot="avatar"
      className={cn(avatarVariants({ size }), className)}
      style={style}
      {...props}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        fallback
      )}
    </div>
  );
}

export { Avatar, avatarVariants };

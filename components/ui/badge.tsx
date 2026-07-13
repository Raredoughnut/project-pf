import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

// 원본: .original/shared/components.css 의 .rd-badge 계열
const badgeVariants = cva(
  "inline-flex items-center gap-1 h-[22px] px-2 rounded-full text-[11px] font-bold tracking-wide leading-none whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-secondary text-secondary-foreground",
        outline: "bg-transparent border border-border text-foreground",
        accent: "bg-primary text-primary-foreground",
        solid: "bg-neutral-900 text-neutral-50",
        pink: "bg-red-lighter text-red-dark",
        mint: "bg-mint-lighter text-mint-dark",
        sky: "bg-blue-lighter text-blue-dark",
        lemon: "bg-orange-lighter text-orange-dark",
        grape: "bg-purple-lighter text-purple-dark",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };

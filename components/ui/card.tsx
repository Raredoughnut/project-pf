import * as React from "react";

import { cn } from "@/lib/utils";

// 원본: .original/shared/components.css 의 .rd-card
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground border border-border rounded-lg p-5",
        className
      )}
      {...props}
    />
  );
}

export { Card };

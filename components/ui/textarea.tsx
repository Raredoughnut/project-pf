import * as React from "react";

import { cn } from "@/lib/utils";

// 원본: .original/shared/components.css 의 .rd-textarea
function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full min-h-20 rounded-md border border-input bg-card px-3 py-2.5 text-sm leading-relaxed text-foreground transition-[border-color,box-shadow] outline-none resize-y",
        "placeholder:text-muted-foreground",
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/20",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

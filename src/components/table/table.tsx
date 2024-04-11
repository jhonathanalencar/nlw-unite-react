import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableProps extends ComponentProps<"table"> {}

export function Table(props: TableProps) {
  return (
    <div className="border border-white/10 rounded-lg overflow-x-auto">
      <table {...props} className={twMerge("w-full", props.className)} />
    </div>
  );
}

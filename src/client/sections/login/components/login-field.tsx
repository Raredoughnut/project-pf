import { Input } from "@/components/ui/input";

type Props = {
  label: string;
  id: string;
} & React.ComponentProps<"input">;

export function LoginField({ label, id, ...inputProps }: Props) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-semibold block mb-1">
        {label}
      </label>
      <Input id={id} {...inputProps} />
    </div>
  );
}

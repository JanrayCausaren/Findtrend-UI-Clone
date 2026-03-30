import { cn } from "@utils/cn";


type TextVariant = "body" | "lead" | "muted" | "small";

type Props = {
  children: React.ReactNode;
  variant?: TextVariant;
  className?: string;
};

const variants: Record<TextVariant, string> = {
  body: "text-base",
  lead: "text-lg text-neutral-700",
  muted: "text-sm text-neutral-400",
  small: "text-sm text-neutral-500",
};

export default function Text({
  children,
  variant = "body",
  className,
}: Props) {
  return (
    <p className={cn(variants[variant], className)}>
      {children}
    </p>
  );
}
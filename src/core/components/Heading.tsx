import { cn } from "@utils/cn";


type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Props = {
  as?: HeadingType;
  children: React.ReactNode;
  className?: string;
};

// const variants: Record<HeadingType, string> = {
//   h1: "text-4xl font-bold tracking-tight",
//   h2: "text-3xl font-semibold tracking-tight",
//   h3: "text-2xl font-semibold",
//   h4: "text-xl font-medium",
//   h5: "text-lg font-medium",
//   h6: "text-base font-medium",
// };

export default function Heading({
  as = "h1",
  children,
  className,
}: Props) {
  const Tag = as;

  return (
    <Tag className={cn("font-display", className)}>
      {children}
    </Tag>
  );
}
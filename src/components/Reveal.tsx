import type { CSSProperties, ElementType, ReactNode } from "react";

type Props = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  stagger?: boolean;
  delay?: number;
};

export default function Reveal({
  as: Tag = "div",
  className,
  children,
  stagger = false,
  delay = 0,
}: Props) {
  const style = delay ? ({ "--d": `${delay}s` } as CSSProperties) : undefined;
  return (
    <Tag
      className={className}
      data-reveal={stagger ? "stagger" : ""}
      style={style}
    >
      {children}
    </Tag>
  );
}

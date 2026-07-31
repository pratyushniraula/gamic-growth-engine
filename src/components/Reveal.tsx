import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li";
}

const Reveal = ({ children, className, delay = 0, as = "div" }: RevealProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Comp = as as any;
  return (
    <Comp
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", inView && "reveal-in", className)}
    >
      {children}
    </Comp>
  );
};

export default Reveal;

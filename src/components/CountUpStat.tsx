import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useInView, prefersReducedMotion } from "@/hooks/use-in-view";

interface StatProps {
  /** Raw display value, e.g. "43", "1,435", "10–30", "100%", "20 Days", "1 in 22" */
  value: string;
  label?: string;
  className?: string;
  labelClassName?: string;
}

/** Animates the LAST number found in the string, preserving all surrounding text. */
const CountUpStat = ({ value, label, className, labelClassName }: StatProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [display, setDisplay] = useState(value);

  const match = value.match(/(\d[\d,]*)(?!.*\d)/);
  const target = match ? Number(match[1].replace(/,/g, "")) : null;

  useEffect(() => {
    if (target === null || !match) return;
    if (prefersReducedMotion()) {
      setDisplay(value);
      return;
    }
    if (!inView) {
      setDisplay(value.replace(match[1], "0"));
      return;
    }
    const duration = 900;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = Math.round(target * eased).toLocaleString("en-US");
      setDisplay(value.replace(match[1], current));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, value]);

  return (
    <div ref={ref}>
      <div className={cn("stat-value", className)}>{display}</div>
      {label && <div className={cn("stat-label mt-1", labelClassName)}>{label}</div>}
    </div>
  );
};

export default CountUpStat;

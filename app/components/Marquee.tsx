"use client";

import {
  Fragment,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/* ---------- Marquee ----------
   Seamless, gap-free horizontal auto-scroll.

   The naive approach (duplicate the list once, translateX(-50%)) only loops
   without a gap when ONE copy of the list is at least as wide as the screen.
   On wider monitors a single copy is narrower than the viewport, so after the
   last item there is empty space until the animation snaps back — the "long
   blank gap, wait a few seconds" bug.

   Fix: measure one copy's width, render as many copies as needed to always
   cover the viewport (+ buffer), and animate by exactly one copy's width. The
   shift distance and duration are driven by CSS variables so the speed stays
   constant (px/sec) regardless of how many copies we end up rendering. */
export function Marquee({
  className,
  trackClassName,
  speed = 40, // pixels per second
  renderCopy,
}: {
  className?: string;
  trackClassName?: string;
  speed?: number;
  renderCopy: (copyIndex: number) => ReactNode;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [copies, setCopies] = useState(2);
  const [shift, setShift] = useState(0);
  const [dur, setDur] = useState(40);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const recompute = () => {
      const unit = track.scrollWidth / copies; // width of a single copy
      if (!unit) return;
      // enough copies to cover the viewport plus a one-copy buffer so the
      // trailing edge never enters view while we shift by one copy.
      const need = Math.max(2, Math.ceil(window.innerWidth / unit) + 2);
      setShift(unit);
      setDur(unit / speed);
      setCopies((prev) => (prev === need ? prev : need));
    };

    recompute();
    const ro = new ResizeObserver(recompute);
    ro.observe(track);
    window.addEventListener("resize", recompute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", recompute);
    };
  }, [copies, speed]);

  return (
    <div className={className}>
      <div
        ref={trackRef}
        className={trackClassName}
        style={
          { "--mq-shift": `${shift}px`, "--mq-dur": `${dur}s` } as CSSProperties
        }
      >
        {Array.from({ length: copies }, (_, c) => (
          <Fragment key={c}>{renderCopy(c)}</Fragment>
        ))}
      </div>
    </div>
  );
}

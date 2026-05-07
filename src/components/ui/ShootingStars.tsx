/**
 * Pure-CSS shooting stars background.
 *
 * Performance contract:
 * - Server-rendered (no client JS, no hydration cost).
 * - Animations are transform + opacity only → composited on GPU,
 *   no layout/paint per frame.
 * - 6 streaks total; small screens drop to 3 via CSS media query.
 * - Respects `prefers-reduced-motion: reduce` (animation disabled).
 *
 * Positions and timings are deterministic to avoid SSR/CSR drift.
 */

type Streak = {
  top: string;
  left: string;
  delay: string;
  duration: string;
  trail: string;
};

const STREAKS: Streak[] = [
  { top: "8%",  left: "95%", delay: "0s",   duration: "6s", trail: "120px" },
  { top: "22%", left: "80%", delay: "1.6s", duration: "7s", trail: "100px" },
  { top: "38%", left: "98%", delay: "3.2s", duration: "5.5s", trail: "140px" },
  { top: "55%", left: "85%", delay: "4.8s", duration: "6.5s", trail: "110px" },
  { top: "12%", left: "70%", delay: "6.4s", duration: "7.5s", trail: "130px" },
  { top: "70%", left: "92%", delay: "8s",   duration: "6s", trail: "115px" },
];

export default function ShootingStars() {
  return (
    <div className="shooting-stars" aria-hidden="true">
      {STREAKS.map((s, i) => (
        <span
          key={i}
          className="shooting-star"
          style={
            {
              "--ss-top": s.top,
              "--ss-left": s.left,
              "--ss-delay": s.delay,
              "--ss-duration": s.duration,
              "--ss-trail": s.trail,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

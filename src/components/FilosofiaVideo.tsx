import { useEffect, useRef } from "react";
import filosofiaVideo from "@/assets/filosofia.mp4";

export function FilosofiaVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!video || !wrapper) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          wrapper.style.opacity = "1";
          video.play().catch(() => {});
        } else {
          wrapper.style.opacity = "0";
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{ opacity: 0, transition: "opacity 0.7s ease" }}
      className="mt-10 rounded-sm overflow-hidden ring-1 ring-primary/20 shadow-[0_20px_60px_-15px_oklch(0.24_0.04_250/0.3)]"
    >
      <video
        ref={videoRef}
        src={filosofiaVideo}
        loop
        muted
        playsInline
        className="w-full block"
      />
    </div>
  );
}

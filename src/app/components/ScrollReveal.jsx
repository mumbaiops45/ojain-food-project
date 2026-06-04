"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.05,
  once = true,
  as: Tag = "div",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) io.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);

  return (
    <Tag
      ref={ref}
      className={`sr-${animation}${visible ? " sr-visible" : ""} ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

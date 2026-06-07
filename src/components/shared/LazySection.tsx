// src/components/shared/LazySection.tsx
"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
  minHeight?: string | number;
  className?: string;
}

export default function LazySection({ children, minHeight = "120px", className = "" }: Props) {
  const [isIntersected, setIsIntersected] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isIntersected) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersected(true);
        }
      },
      {
        rootMargin: "150px", // Trigger slightly before entering viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isIntersected]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        minHeight: isIntersected ? undefined : minHeight,
        width: "100%",
      }}
    >
      {isIntersected ? children : null}
    </div>
  );
}

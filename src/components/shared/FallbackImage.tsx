// src/components/shared/FallbackImage.tsx
"use client";

import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";

interface FallbackImageProps extends Omit<ImageProps, "onError"> {
  fallbackText?: string;
}

export default function FallbackImage({
  src,
  alt,
  fallbackText,
  className,
  style,
  ...props
}: FallbackImageProps) {
  const [error, setError] = useState(false);

  // Reset error state if src changes
  useEffect(() => {
    setError(false);
  }, [src]);

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-amber-950/5 text-amber-900/50 font-bold ${className || ""}`}
        style={{
          fontFamily: "var(--font-cinzel)",
          width: props.fill ? "100%" : props.width,
          height: props.fill ? "100%" : props.height,
          ...style,
        }}
      >
        {fallbackText ? fallbackText.substring(0, 2).toUpperCase() : "✦"}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setError(true)}
      {...props}
    />
  );
}

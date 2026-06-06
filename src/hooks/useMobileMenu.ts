// src/hooks/useMobileMenu.ts
// Open/close state for the mobile chrome overlay (MobileTopBar / MobileMenu).
// See design.md Part B `useMobileMenu()` formal spec and "Mobile menu lifecycle".
//
// Invariant: body scroll is locked IFF `open`. The menu closes on navigation
// (whenever `usePathname()` changes). This module is a hook module — it is
// consumed only inside client components, so it intentionally carries no
// "use client" directive of its own.
import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export interface UseMobileMenu {
  open: boolean;
  toggle: () => void;
  close: () => void;
}

export function useMobileMenu(): UseMobileMenu {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  const toggle = useCallback(() => setOpen((prev) => !prev), []);
  const close = useCallback(() => setOpen(false), []);

  // Lock body scroll while the menu is open; restore the previous overflow
  // value on close AND on unmount. Guarded for SSR. The cleanup runs both when
  // `open` flips back to false and when the component unmounts while open, so
  // scrolling is always restored — keeping `bodyScrollLocked === open`.
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (!open) return;

    const body = document.body;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    return () => {
      body.style.overflow = previousOverflow;
    };
  }, [open]);

  return { open, toggle, close };
}

export default useMobileMenu;

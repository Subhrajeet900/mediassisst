"use client";

import { useEffect, useState, ReactNode } from "react";

interface ClientOnlyProps {
  children: ReactNode;
}

/**
 * ClientOnly component ensures that its children are only rendered 
 * on the client side, avoiding hydration mismatches.
 */
export default function ClientOnly({ children }: ClientOnlyProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <>{children}</>;
}

"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export type MediaType = "pc" | "tablet" | "mobile" | "loading";

function useMedia(): MediaType {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  const size = {
    mobile: 360,
    tablet: 744,
    pc: 1024,
  };

  const isPc = useMediaQuery({ minWidth: size.pc }) && isReady;
  const isTablet = useMediaQuery({ minWidth: size.tablet }) && isReady;

  if (!isReady) return "loading";
  if (isPc) return "pc";
  if (isTablet) return "tablet";
  return "mobile";
}

export default useMedia;

"use client";

import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

function useMedia() {
  const isReady = useRef(false);
  useEffect(() => {
    isReady.current = true;
  }, []);
  const size = {
    mobile: 360,
    tablet: 744,
    pc: 1024,
  };
  const isPc = useMediaQuery({ minWidth: size.pc }) && isReady.current;
  const isTablet = useMediaQuery({ minWidth: size.tablet }) && isReady.current;
  const isMobile = useMediaQuery({ minWidth: size.mobile }) && isReady.current;
  return { isPc, isTablet, isMobile, isReady };
}

export default useMedia;

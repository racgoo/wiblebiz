"use client";

import styles from "@components/button/ScrollUpButton.module.css";
import scrollUpIcon from "@public/icon/scroll-up-icon.svg";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

function ScrollUpButton() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsVisible(window.scrollY > 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div className={clsx(styles.container, !isVisible && styles.hiddenCircle)}>
      <button
        className={clsx(styles.button, !isVisible && styles.hiddenArrow)}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Image src={scrollUpIcon} alt="scrollUp" width={20} height={20} />
      </button>
    </div>
  );
}

export default ScrollUpButton;

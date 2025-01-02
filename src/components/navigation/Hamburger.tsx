"use client";

import { Fragment, useState } from "react";
import styles from "@components/navigation/Hamburger.module.css";
import useMedia from "@hooks/useMedia";
import clsx from "clsx";

interface HamburgerProps {
  onClick?: () => void;
}

function Hamburger({ onClick }: HamburgerProps) {
  const media = useMedia();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick?.();
  };

  if (media === "pc" || media === "loading") return null;
  return (
    <Fragment>
      <button
        className={clsx(styles.hamburger, isOpen && styles.open)}
        onClick={handleClick}
      >
        <span className={styles.line} />
        <span className={styles.line} />
        <span className={styles.line} />
      </button>
    </Fragment>
  );
}

export default Hamburger;

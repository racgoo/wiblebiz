"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@components/accordion/Accordion.module.css";
import clsx from "clsx";
import accordionArrow from "@public/icon/accordion-arrow-icon.svg";
import Image from "next/image";

interface AccordionProps {
  headerNode: React.ReactNode;
  contentNode: React.ReactNode;
  isOpen: boolean;
  handleClick: () => void;
}

function Accordion({
  headerNode,
  contentNode,
  isOpen,
  handleClick,
}: AccordionProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [contentRef]);

  return (
    <section className={styles.container}>
      <header
        className={clsx(styles.header, {
          [styles.active]: isOpen,
        })}
        onClick={handleClick}
      >
        {headerNode}
        <Image
          src={accordionArrow}
          alt="accordionArrow"
          className={clsx(styles.arrow, {
            [styles.rotated]: isOpen,
          })}
        />
      </header>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ height: isOpen ? contentHeight : 0 }}
      >
        {contentNode}
        <div className={styles.contentDivider} />
      </div>
    </section>
  );
}

export default Accordion;

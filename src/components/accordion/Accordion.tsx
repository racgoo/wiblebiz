"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@components/accordion/Accordion.module.css";
import CommonText from "@components/text/CommonText";
import clsx from "clsx";
import accordionArrow from "@public/icon/accordion-arrow-icon.svg";
import Image from "next/image";

interface AccordionProps {
  header: React.ReactNode;
  content: React.ReactNode;
}

function Accordion({ headerNode, contentNode }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

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

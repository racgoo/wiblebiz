"use client";

import styles from "@app/FAQ/FaqAccordion.module.css";
import Accordion from "@components/accordion/Accordion";
import CommonText from "@components/text/CommonText";
import useMedia from "@hooks/useMedia";

interface FaqAccordionProps {
  title: string;
  content: string;
  type: string;
  accordionId: string;
  activeAccordionId: string;
  setActiveAccordionId: (id: string) => void;
}

function FaqAccordion({
  title,
  content,
  type,
  accordionId,
  activeAccordionId,
  setActiveAccordionId,
}: FaqAccordionProps) {
  function handleClick() {
    if (accordionId === activeAccordionId) {
      setActiveAccordionId("");
    } else {
      setActiveAccordionId(accordionId);
    }
  }
  return (
    <Accordion
      headerNode={<FaqAccordionHeader title={title} type={type} />}
      contentNode={<FaqAccordionContent content={content} />}
      isOpen={activeAccordionId === accordionId}
      handleClick={handleClick}
    />
  );
}

const typeFontSize = {
  loading: 12,
  mobile: 12,
  tablet: 16,
  pc: 18,
};

const titleFontSize = {
  loading: 16,
  mobile: 16,
  tablet: 20,
  pc: 18,
};

function FaqAccordionHeader({ title, type }: { title: string; type: string }) {
  const media = useMedia();
  return (
    <div className={styles.accordionHeader}>
      <CommonText
        size={typeFontSize[media]}
        color="gray500"
        type="small"
        className={styles.accordionType}
      >
        {type}
      </CommonText>
      <CommonText
        size={titleFontSize[media]}
        color="gray800"
        type="large"
        className={styles.accordionTitle}
      >
        {title}
      </CommonText>
    </div>
  );
}

function FaqAccordionContent({ content }: { content: string }) {
  return (
    <div
      className={styles.accordionContent}
      dangerouslySetInnerHTML={{ __html: content }}
      ref={(el) => {
        if (el) {
          el.style.height = `${el.scrollHeight}px`;
        }
      }}
    />
  );
}

export default FaqAccordion;

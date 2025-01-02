"use client";

import CommonText from "@components/text/CommonText";
import useMedia, { MediaType } from "@hooks/useMedia";
import styles from "@app/FAQ/FaqTitle.module.css";

const titleFontSize: Record<MediaType, number> = {
  loading: 24,
  mobile: 24,
  tablet: 40,
  pc: 48,
};

const subTitleFontSize: Record<MediaType, number> = {
  loading: 14,
  mobile: 14,
  tablet: 14,
  pc: 16,
};

function FaqTitle() {
  const media = useMedia();
  return (
    <section className={styles.container}>
      <CommonText type="large" size={titleFontSize[media]}>
        자주 묻는 질문
      </CommonText>
      <CommonText type="small" size={subTitleFontSize[media]}>
        궁금하신 내용을 빠르게 찾아보세요.
      </CommonText>
    </section>
  );
}

export default FaqTitle;

"use client";

import styles from "./FaqMoreButton.module.css";
import CommonText from "@components/text/CommonText";
import useMedia from "@hooks/useMedia";

const fontSize = {
  loading: 14,
  mobile: 14,
  tablet: 14,
  pc: 16,
};

const marginTop = {
  loading: 16,
  mobile: 16,
  tablet: 24,
  pc: 32,
};

function FaqMoreButton({ handleClick }: { handleClick: () => void }) {
  const media = useMedia();
  return (
    <button
      className={styles.container}
      style={{
        marginTop: marginTop[media],
      }}
      onClick={handleClick}
    >
      <CommonText size={fontSize[media]} type="regular">
        +더보기
      </CommonText>
    </button>
  );
}

export default FaqMoreButton;

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

function FaqMoreButton({
  handleClick,
  isLastPage,
}: {
  handleClick: () => void;
  isLastPage: boolean;
}) {
  const media = useMedia();
  const text = isLastPage ? "마지막 페이지입니다." : "+더보기";
  return (
    <button
      className={styles.container}
      style={{
        marginTop: marginTop[media],
      }}
      disabled={isLastPage}
      onClick={handleClick}
    >
      <CommonText size={fontSize[media]} type="regular">
        {text}
      </CommonText>
    </button>
  );
}

export default FaqMoreButton;

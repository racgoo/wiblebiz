"use client";

import styles from "@components/guide/ProcessBox.module.css";
import CommonText from "@components/text/CommonText";
import useMedia from "@hooks/useMedia";
import Image, { StaticImageData } from "next/image";
import processArrowIcon from "@public/icon/process-arrow-icon.svg";

const textSize = {
  loading: 14,
  mobile: 14,
  tablet: 16,
  pc: 16,
};

function ProcessBox({
  title,
  content,
  icon,
  index,
}: {
  title: string;
  content: string;
  icon: StaticImageData;
  index: number;
}) {
  const media = useMedia();
  const isNeedArrow = index !== 0 && media === "pc";
  return (
    <li className={styles.processBox}>
      <Image src={icon} alt={title} className={styles.icon} />
      <div className={styles.textBox}>
        {isNeedArrow && (
          <Image
            src={processArrowIcon}
            alt={title}
            className={styles.arrowIcon}
          />
        )}
        <CommonText type="large" size={textSize[media] + 2}>
          {title}
        </CommonText>
        <CommonText type="small" size={textSize[media]}>
          {content}
        </CommonText>
      </div>
    </li>
  );
}

export default ProcessBox;

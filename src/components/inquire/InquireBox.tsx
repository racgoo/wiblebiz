"use client";

import styles from "@components/inquire/InquireBox.module.css";
import CommonText from "@components/text/CommonText";
import useMedia from "@hooks/useMedia";
import Image from "next/image";
import Link from "next/link";

const inquireFontSize = {
  loading: 16,
  mobile: 16,
  tablet: 16,
  pc: 18,
};

interface InquireBoxProps {
  title: string;
  subTitle: string;
  icon: string;
  url: string;
  download?: string | null;
}

function InquireBox({
  title,
  subTitle = "",
  icon,
  url,
  download,
}: InquireBoxProps) {
  const media = useMedia();
  const isNeedSubTitle = subTitle !== "";
  const OuterTag = download ? "a" : Link;
  return (
    <OuterTag href={url} className={styles.inquireBox} download={download}>
      <Image src={icon} alt={title} className={styles.icon} />
      <div>
        <CommonText type="large" size={inquireFontSize[media]}>
          {title}
        </CommonText>
        {isNeedSubTitle && (
          <CommonText type="small" size={14} color="gray700">
            {subTitle}
          </CommonText>
        )}
      </div>
    </OuterTag>
  );
}

export default InquireBox;

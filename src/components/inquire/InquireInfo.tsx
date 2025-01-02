"use client";

import styles from "@components/inquire/InquireInfo.module.css";
import CommonText from "@components/text/CommonText";
import InquireBox from "@components/inquire/InquireBox";

import inquireBoxIcon_1 from "@public/icon/inquire-box-icon-1.svg";
import inquireBoxIcon_2 from "@public/icon/inquire-box-icon-2.svg";
import inquireBoxIcon_3 from "@public/icon/inquire-box-icon-3.svg";

const INQUIRE_INFO = [
  {
    title: "상품제안서 다운로드",
    subTitle: "",
    icon: inquireBoxIcon_1,
    url: "/file/위블비즈 상품제안서.pdf",
    download: "위블비즈 상품제안서",
  },
  {
    title: "상담문의 등록하기",
    subTitle: "",
    icon: inquireBoxIcon_2,
    url: "/Counsel",
    download: null,
  },
  {
    title: "카톡으로 문의하기",
    subTitle: "ID: Wible Biz(위블비즈)",
    icon: inquireBoxIcon_3,
    url: "https://pf.kakao.com/_xfLxjdb",
    download: null,
  },
];

function InquireInfo() {
  return (
    <div className={styles.inquireInfo}>
      <section className={styles.inquireTitle}>
        <CommonText type="large" size={24}>
          서비스 문의
        </CommonText>
      </section>
      <section className={styles.inquireBoxList}>
        {INQUIRE_INFO.map((inquire) => (
          <InquireBox key={inquire.title} {...inquire} />
        ))}
      </section>
    </div>
  );
}

export default InquireInfo;

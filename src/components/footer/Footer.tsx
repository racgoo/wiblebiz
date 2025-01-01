"use client";

import styles from "@components/footer/Footer.module.css";
import useMedia, { MediaType } from "@hooks/useMedia";
import Link from "next/link";
import { DETAIL_INFO_TYPE } from "./details/info.type";
import MobileDetail from "@components/footer/details/MobileDetail";
import TabletDetail from "@components/footer/details/TabletDetail";
import PcDetail from "@components/footer/details/PcDetail";
import Copyright from "@components/footer/copyright/Copyright";

const PRIVACY_POLICY_URL = "https://privacy.kia.com/overview/full-policy";
const TERMS_OF_SERVICE_URL = "/TermsOfUse";

const DETAIL_INFO: DETAIL_INFO_TYPE = {
  location: "서울특별시 서초구 헌릉로 12",
  corp: "기아㈜",
  representative: "대표: 송호성, 최준영",
  businessNumber: "사업자등록번호: 119-81-02316",
  communicationNumber: "통신판매번호: 2006-07935",
  contactEmail: "wible.biz@kia.com",
};

function DetailGuide({ media }: { media: MediaType }) {
  return {
    mobile: <MobileDetail detailInfo={DETAIL_INFO} />,
    tablet: <TabletDetail detailInfo={DETAIL_INFO} />,
    pc: <PcDetail detailInfo={DETAIL_INFO} />,
    loading: null,
  }[media];
}

function Footer() {
  const media = useMedia();
  if (media === "loading") return null;

  return (
    <footer className={styles.container}>
      <div className={styles.contentContainer}>
        <section>
          <div className={styles.buttonContainer}>
            <Link href={PRIVACY_POLICY_URL}>개인정보 처리방침</Link>
            <Link href={TERMS_OF_SERVICE_URL}>이용약관</Link>
          </div>
          <div className={styles.textContainer}>
            <DetailGuide media={media} />
          </div>
        </section>
        <section className={styles.textContainer}>
          <Copyright media={media} />
        </section>
      </div>
    </footer>
  );
}

export default Footer;
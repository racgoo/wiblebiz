"use client";

import useMedia, { MediaType } from "@hooks/useMedia";
import styles from "@components/market/AppDownload.module.css";
import CommonText from "@components/text/CommonText";
import Image from "next/image";
import appStore from "@public/logo/appstore-logo.svg";
import playStore from "@public/logo/playstore-logo.svg";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=kor.mop.user.app";
const APP_STORE_URL =
  "https://apps.apple.com/kr/app/%EC%9C%84%EB%B8%94-%EB%B9%84%EC%A6%88/id1598065794";

const appInfoTitleFontSize: Record<MediaType, number> = {
  loading: 16,
  mobile: 16,
  tablet: 20,
  pc: 24,
};

const appInfoMarketFontSize: Record<MediaType, number> = {
  loading: 12,
  mobile: 14,
  tablet: 16,
  pc: 16,
};

const appInfoMarkeIconSize: Record<MediaType, number> = {
  loading: 24,
  mobile: 24,
  tablet: 24,
  pc: 28,
};

function AppDownload() {
  const media = useMedia();
  const marketFontSize = appInfoMarketFontSize[media];
  const marketIconSize = appInfoMarkeIconSize[media];
  const titleFontSize = appInfoTitleFontSize[media];

  return (
    <article className={styles.appInfo}>
      <section className={styles.appInfoTitle}>
        <CommonText type="large" size={titleFontSize} color="mint900">
          위블 비즈 App&nbsp;
        </CommonText>
        <CommonText type="large" size={titleFontSize}>
          지금 만나보세요!
        </CommonText>
      </section>

      <section className={styles.downloadContainer}>
        <a className={styles.download} href={PLAY_STORE_URL}>
          <Image
            src={playStore}
            alt="playStore"
            width={marketIconSize}
            height={marketIconSize}
          />
          <CommonText type="regular" size={marketFontSize}>
            Google Play
          </CommonText>
        </a>
        <a className={styles.download} href={APP_STORE_URL}>
          <Image
            src={appStore}
            alt="appStore"
            width={marketIconSize}
            height={marketIconSize}
          />
          <CommonText type="regular" size={marketFontSize}>
            App Store
          </CommonText>
        </a>
      </section>
    </article>
  );
}

export default AppDownload;

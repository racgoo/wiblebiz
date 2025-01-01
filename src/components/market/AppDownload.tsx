"use client";

import useMedia, { MediaType } from "@hooks/useMedia";
import styles from "@components/market/AppDownload.module.css";
import CommonText from "@components/text/CommonText";
import Image from "next/image";
import appStore from "@public/logo/appstore-logo.svg";
import playStore from "@public/logo/playstore-logo.svg";

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
        <div className={styles.download}>
          <Image
            src={playStore}
            alt="playStore"
            width={marketIconSize}
            height={marketIconSize}
          />
          <CommonText type="regular" size={marketFontSize}>
            Google Play
          </CommonText>
        </div>
        <div className={styles.download}>
          <Image
            src={appStore}
            alt="appStore"
            width={marketIconSize}
            height={marketIconSize}
          />
          <CommonText type="regular" size={marketFontSize}>
            App Store
          </CommonText>
        </div>
      </section>
    </article>
  );
}

export default AppDownload;

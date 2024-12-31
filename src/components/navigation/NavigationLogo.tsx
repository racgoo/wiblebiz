"use client";

import Image from "next/image";
import WibbleBizLogoSmall from "@public/logo/wiblebiz-logo-small.svg";
import WibbleBizLogoLarge from "@public/logo/wiblebiz-logo-large.svg";
import styles from "@components/navigation/NavigationLogo.module.css";
import useMedia from "@hooks/useMedia";

function NavigationLogo() {
  const media = useMedia();
  return (
    <Image
      className={styles.logo}
      src={media === "pc" ? WibbleBizLogoLarge : WibbleBizLogoSmall}
      alt="wibblebiz-logo"
    />
  );
}

export default NavigationLogo;

"use client";

import Image from "next/image";
import WibbleBizLogoSmall from "@public/logo/wiblebiz-logo-small.svg";
import WibbleBizLogoLarge from "@public/logo/wiblebiz-logo-large.svg";
import styles from "./NavigationLogo.module.css";
import useMedia from "@hooks/useMedia";

function NavigationLogo() {
  const { isPc } = useMedia();
  return (
    <Image
      className={styles.logo}
      src={isPc ? WibbleBizLogoLarge : WibbleBizLogoSmall}
      alt="wibblebiz-logo"
    />
  );
}

export default NavigationLogo;

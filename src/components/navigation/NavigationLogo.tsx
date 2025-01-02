"use client";

import Image from "next/image";
import WibbleBizLogoSmall from "@public/logo/wiblebiz-logo-small.svg";
import WibbleBizLogoLarge from "@public/logo/wiblebiz-logo-large.svg";
import styles from "@components/navigation/NavigationLogo.module.css";
import useMedia from "@hooks/useMedia";
import { useRouter } from "next/navigation";

function NavigationLogo() {
  const media = useMedia();
  const router = useRouter();
  return (
    <Image
      className={styles.logo}
      src={media === "pc" ? WibbleBizLogoLarge : WibbleBizLogoSmall}
      alt="wibblebiz-logo"
      onClick={() => router.push("/")}
    />
  );
}

export default NavigationLogo;

"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import styles from "@components/navigatiojn/NavigationLink.module.css";
import CommonText from "@components/text/CommonText";
import { useEffect, useState } from "react";

interface NavigationLinkProps {
  href: string;
  text: string;
}
function NavigationLink({ href, text }: NavigationLinkProps) {
  const pathname = usePathname();
  const [linkClassName, setLinkClassName] = useState(styles.navLink);

  //초기 애니메이션
  useEffect(() => {
    if (pathname === href) {
      setLinkClassName(clsx(styles.navLink, styles.active));
    }
  }, [pathname]);

  return (
    <Link className={linkClassName} href={href}>
      <CommonText size={18} type="regular">
        {text}
      </CommonText>
    </Link>
  );
}

export default NavigationLink;

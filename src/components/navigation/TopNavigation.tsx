import styles from "@components/navigation/TopNavigation.module.css";
import NavigationLink from "@components/navigation/NavigationLink";
import NavigationLogo from "@components/navigation/NavigationLogo";
import Hamburger from "@components/navigation/Hamburger";

const NAV_LINKS = [
  { href: "/Guide", text: "서비스 소개" },
  { href: "/FAQ", text: "저주 묻는 질문" },
  { href: "/News", text: "새소식" },
  { href: "/Counsel", text: "상담문의" },
];

function TopNavigation() {
  return (
    <nav className={styles.container}>
      <NavigationLogo />
      <li className={styles.navLinks}>
        {NAV_LINKS.map((link) => (
          <NavigationLink key={link.href} href={link.href} text={link.text} />
        ))}
      </li>
      <Hamburger />
    </nav>
  );
}

export default TopNavigation;

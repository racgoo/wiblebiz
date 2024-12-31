import styles from "@components/text/CommonText.module.css";
import { colors } from "@style/colors";

interface CommonTextProps {
  type: "large" | "regular" | "small";
  size: number;
  children: React.ReactNode;
  color?: keyof typeof colors;
}

function CommonText({
  children,
  type,
  size,
  color = "gray800",
}: CommonTextProps) {
  return (
    <p className={styles[type]} style={{ fontSize: size, color: color }}>
      {children}
    </p>
  );
}

export default CommonText;

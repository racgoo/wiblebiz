import styles from "@components/text/CommonText.module.css";
import { colors } from "@style/colors";
import clsx from "clsx";

interface CommonTextProps {
  type: "large" | "regular" | "small";
  size: number;
  children: React.ReactNode;
  color?: keyof typeof colors;
  lineHeight?: number;
  className?: string;
}

function CommonText({
  children,
  type,
  size,
  color = "gray800",
  lineHeight = 1.4,
  className = "",
}: CommonTextProps) {
  return (
    <p
      className={clsx(styles[type], className)}
      style={{
        fontSize: size,
        color: colors[color],
        lineHeight,
      }}
    >
      {children}
    </p>
  );
}

export default CommonText;

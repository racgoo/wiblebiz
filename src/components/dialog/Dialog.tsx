import styles from "@components/dialog/Dialog.module.css";

function Dialog({
  children,
  open = false,
}: {
  children: React.ReactNode;
  open: boolean;
}) {
  return (
    <div
      className={styles.container}
      style={{ display: open ? "block" : "none" }}
    >
      <main className={styles.content}>{children}</main>
    </div>
  );
}

export default Dialog;

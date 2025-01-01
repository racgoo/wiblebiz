import styles from "@components/footer/term/TermHeader.module.css";
import CommonText from "@components/text/CommonText";
import closeIcon from "@public/icon/close.svg";
import Image from "next/image";

function TermHeader({ handleClose }: { handleClose: () => void }) {
  return (
    <div className={styles.container}>
      <CommonText size={16} type="large">
        이용약관
      </CommonText>
      <button onClick={handleClose}>
        <Image src={closeIcon} alt="close" width={24} height={24} />
      </button>
    </div>
  );
}

export default TermHeader;

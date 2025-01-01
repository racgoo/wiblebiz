import styles from "@components/guide/ProcessInfo.module.css";
import CommonText from "@components/text/CommonText";
import ProcessBox from "./ProcessBox";
import ProcessIcon_1 from "@public/icon/process-1-icon.svg";
import ProcessIcon_2 from "@public/icon/process-2-icon.svg";
import ProcessIcon_3 from "@public/icon/process-3-icon.svg";
import ProcessIcon_4 from "@public/icon/process-4-icon.svg";

const processBoxList = [
  {
    title: "1. 문의 등록",
    content: "상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.",
    icon: ProcessIcon_1,
  },
  {
    title: "2. 관리자 설정",
    content: "관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.",
    icon: ProcessIcon_2,
  },
  {
    title: "3. 임직원 가입",
    content: "사용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.",
    icon: ProcessIcon_3,
  },
  {
    title: "4. 서비스 이용",
    content: "사용자 App에서 차량 예약을 하고 위블존에서 바로 이용하세요!",
    icon: ProcessIcon_4,
  },
];

function ProcessInfo() {
  return (
    <article className={styles.processInfo}>
      <section style={{ marginBottom: 16 }}>
        <CommonText type="large" size={24}>
          이용 프로세스 안내
        </CommonText>
      </section>
      <section className={styles.processBoxList}>
        {processBoxList.map((process, index) => (
          <ProcessBox
            key={process.title}
            title={process.title}
            content={process.content}
            icon={process.icon}
            index={index}
          />
        ))}
      </section>
    </article>
  );
}

export default ProcessInfo;

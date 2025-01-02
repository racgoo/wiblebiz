import CommonText from "@components/text/CommonText";

function FaqTitle() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        height: 124,
      }}
    >
      <CommonText type="large" size={24}>
        자주 묻는 질문
      </CommonText>
      <CommonText type="small" size={14}>
        궁금하신 내용을 빠르게 찾아보세요.
      </CommonText>
    </section>
  );
}

export default FaqTitle;

import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Link
        href="/FAQ"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: 200,
          height: 200,
          borderRadius: "50%",
          backgroundColor: "green",
        }}
      >
        <div>FAQ 바로가기</div>
        <div>버튼입니다</div>
        <div>눌러주세요</div>
      </Link>
    </div>
  );
}

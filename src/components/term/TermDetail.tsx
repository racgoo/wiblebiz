function TermDetail({ content }: { content: string }) {
  return (
    <section style={{ marginTop: 12 }}>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        style={{
          width: "100%",
          fontFamily: "Kia-font-400",
          fontSize: 12,
        }}
      />
    </section>
  );
}

export default TermDetail;

function Contact({ email }: { email: string }) {
  return (
    <div style={{ display: "inline-block" }}>
      <p>고객센터: 1833-4964</p>
      <a href={`mailto:${email}`}>
        제휴문의:{" "}
        <span style={{ cursor: "pointer", textDecoration: "underline" }}>
          {email}
        </span>
      </a>
    </div>
  );
}

export default Contact;

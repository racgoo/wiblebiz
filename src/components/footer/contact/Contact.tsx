function Contact({ email }: { email: string }) {
  return (
    <span>
      <p>고객센터: 1833-4964</p>
      <a href={`mailto:${email}`}>
        제휴문의:{" "}
        <span style={{ cursor: "pointer", textDecoration: "underline" }}>
          {email}
        </span>
      </a>
    </span>
  );
}

export default Contact;

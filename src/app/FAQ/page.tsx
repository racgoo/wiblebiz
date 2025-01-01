import ProcessInfo from "@components/guide/ProcessInfo";
import AppDownload from "@components/market/AppDownload";
import InquireInfo from "@components/inquire/InquireInfo";
import Faq from "./Faq";
import { Fragment } from "react";

function FAQPage() {
  return (
    <Fragment>
      <Faq />
      <InquireInfo />
      <ProcessInfo />
      <AppDownload />
    </Fragment>
  );
}

export default FAQPage;

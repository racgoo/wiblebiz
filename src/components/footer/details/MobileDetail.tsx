import { Fragment } from "react";
import { DETAIL_INFO_TYPE } from "./info.type";
import Contact from "../contact/Contact";

function MobileDetail({ detailInfo }: { detailInfo: DETAIL_INFO_TYPE }) {
  return (
    <Fragment>
      <section>
        <p>{detailInfo.location}</p>
        <p>{detailInfo.corp}</p>
      </section>
      <section>
        <p>{detailInfo.representative}</p>
      </section>
      <section>
        <p>{detailInfo.businessNumber}</p>
      </section>
      <section>
        <p>{detailInfo.communicationNumber}</p>
      </section>
      <Contact email={detailInfo.contactEmail} />
    </Fragment>
  );
}

export default MobileDetail;

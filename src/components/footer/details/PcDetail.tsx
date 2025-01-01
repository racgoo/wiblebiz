import Contact from "../contact/Contact";
import { DETAIL_INFO_TYPE } from "./info.type";

function PcDetail({ detailInfo }: { detailInfo: DETAIL_INFO_TYPE }) {
  return (
    <section style={{ textAlign: "right" }}>
      <p>{detailInfo.location}</p>
      <p>{detailInfo.corp}</p>
      <p>{detailInfo.representative}</p>
      <p>{detailInfo.businessNumber}</p>
      <p>{detailInfo.communicationNumber}</p>
      <Contact email={detailInfo.contactEmail} />
    </section>
  );
}
export default PcDetail;

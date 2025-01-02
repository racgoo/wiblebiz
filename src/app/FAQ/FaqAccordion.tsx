import Accordion from "@components/accordion/Accordion";
import CommonText from "@components/text/CommonText";

interface FaqAccordionProps {
  title: string;
  content: string;
  type: string;
  accordionId: string;
  activeAccordionId: string;
  setActiveAccordionId: (id: string) => void;
}

function FaqAccordion({
  title,
  content,
  type,
  accordionId,
  activeAccordionId,
  setActiveAccordionId,
}: FaqAccordionProps) {
  function handleClick() {
    if (accordionId === activeAccordionId) {
      setActiveAccordionId("");
    } else {
      setActiveAccordionId(accordionId);
    }
  }
  return (
    <Accordion
      headerNode={<FaqAccordionHeader title={title} type={type} />}
      contentNode={<FaqAccordionContent content={content} />}
      isOpen={activeAccordionId === accordionId}
      handleClick={handleClick}
    />
  );
}

function FaqAccordionHeader({ title, type }: { title: string; type: string }) {
  return (
    <div>
      <CommonText size={12} color="gray500" type="small">
        {type}
      </CommonText>
      <CommonText size={16} color="gray800" type="large">
        {title}
      </CommonText>
    </div>
  );
}

function FaqAccordionContent({ content }: { content: string }) {
  return (
    <div style={{ margin: "16px 0px " }}>
      <CommonText size={12} color="gray500" type="regular">
        {content}
      </CommonText>
    </div>
  );
}

export default FaqAccordion;

"use client";

import styles from "@app/FAQ/Faq.module.css";
import { useEffect, useState } from "react";
import FaqTitle from "@app/FAQ/FaqTitle";
import FaqSearch from "@app/FAQ/FaqSearch";
import HeaderTab from "@components/tab/HeaderTab";
import SubTab from "@components/tab/SubTab";
import FaqAccordion from "./FaqAccordion";
import { colors } from "@style/colors";
import FaqMoreButton from "./FaqMoreButton";

const tabList = [
  {
    title: "서비스 도입",
    key: "CONSULT",
  },
  {
    title: "서비스 이용",
    key: "JOIN_SERVICE_USE",
  },
];

const subTabList = [
  {
    title: "전체",
    key: "ALL",
  },
  {
    title: "서비스 상담",
    key: "CONSULT",
  },
  {
    title: "도입 상담",
    key: "JOIN_CONSULT",
  },
  {
    title: "계약",
    key: "JOIN_CONTRACT",
  },
];

const accordionList = [
  {
    type: "서비스 상품",
    title: "header",
    content: "content",
  },
  {
    type: "서비스 상품",
    title: "header2",
    content: "content2",
  },
  {
    type: "서비스 상품",
    title: "header3",
    content: "content3",
  },
];

function Faq() {
  const [searchText, setSearchText] = useState("");
  const [selectedMainTabIndex, setSelectedMainTabIndex] = useState(0);
  const [selectedSubTabIndex, setSelectedSubTabIndex] = useState(0);
  const [activeAccordionId, setActiveAccordionId] = useState("");
  useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  const searchAction = (text: string) => {
    console.log(text);
  };

  return (
    <article className={styles.container}>
      <FaqTitle />
      <HeaderTab
        tabList={tabList.map((tab) => tab.title)}
        setSelectedTabIndex={setSelectedMainTabIndex}
        selectedTabIndex={selectedMainTabIndex}
      />
      <FaqSearch setSearchText={setSearchText} searchAction={searchAction} />
      <SubTab
        tabList={subTabList.map((tab) => tab.title)}
        setSelectedTabIndex={setSelectedSubTabIndex}
        selectedTabIndex={selectedSubTabIndex}
      />
      <div style={{ height: 2, backgroundColor: colors.gray800 }} />
      {accordionList.map((accordion) => (
        <FaqAccordion
          key={accordion.title}
          type={accordion.type}
          title={accordion.title}
          content={accordion.content}
          accordionId={accordion.title}
          activeAccordionId={activeAccordionId}
          setActiveAccordionId={setActiveAccordionId}
        />
      ))}
      <FaqMoreButton handleClick={() => {}} />
    </article>
  );
}

export default Faq;

"use client";

import styles from "@app/FAQ/Faq.module.css";
import { useState } from "react";
import FaqTitle from "@app/FAQ/FaqTitle";
import FaqSearch from "@app/FAQ/FaqSearch";
import HeaderTab from "@components/tab/HeaderTab";
import SubTab from "@components/tab/SubTab";
import FaqAccordion from "./FaqAccordion";
import { colors } from "@style/colors";
import FaqMoreButton from "./FaqMoreButton";
import fetchTabs from "@api/tabs.api";
import { useQuery } from "@tanstack/react-query";

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

  const { data: tabs } = useQuery({
    queryKey: ["tabs"],
    queryFn: fetchTabs,
  });

  if (!tabs) return null;

  const headerTabList = tabs.map((tab) => tab.name);
  const subTabList = [
    "전체",
    ...tabs[selectedMainTabIndex].categories.map((tab) => tab.name),
  ];
  const searchAction = (text: string) => {
    console.log(text);
  };

  return (
    <article className={styles.container}>
      <FaqTitle />
      <HeaderTab
        tabList={headerTabList}
        setSelectedTabIndex={setSelectedMainTabIndex}
        selectedTabIndex={selectedMainTabIndex}
      />
      <FaqSearch setSearchText={setSearchText} searchAction={searchAction} />
      <SubTab
        tabList={subTabList}
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

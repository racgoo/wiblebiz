"use client";

import { useEffect, useState } from "react";
import FaqTitle from "@app/FAQ/FaqTitle";
import FaqSearch from "@app/FAQ/FaqSearch";
import HeaderTab from "@components/tab/HeaderTab";
import SubTab from "@components/tab/SubTab";
import Accordion from "@components/accordion/Accordion";

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

function Faq() {
  const [searchText, setSearchText] = useState("");
  const [selectedMainTabIndex, setSelectedMainTabIndex] = useState(0);
  const [selectedSubTabIndex, setSelectedSubTabIndex] = useState(0);

  useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  const searchAction = (text: string) => {
    console.log(text);
  };

  return (
    <article>
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
      <Accordion title="전체" content="전체" />
    </article>
  );
}

export default Faq;

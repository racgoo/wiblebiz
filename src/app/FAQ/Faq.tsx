"use client";

import { useEffect, useState } from "react";
import FaqTitle from "./FaqTitle";
import Tab from "@components/tab/Tab";
import FaqSearch from "./FaqSearch";

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

function Faq() {
  const [searchText, setSearchText] = useState("");
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  const searchAction = (text: string) => {
    console.log(text);
  };

  return (
    <article>
      <FaqTitle />
      <Tab
        tabList={tabList.map((tab) => tab.title)}
        setSelectedTabIndex={setSelectedTabIndex}
        selectedTabIndex={selectedTabIndex}
        marginBottom={24}
      />
      <FaqSearch
        setSearchText={setSearchText}
        searchAction={searchAction}
        marginBottom={16}
      />
    </article>
  );
}

export default Faq;

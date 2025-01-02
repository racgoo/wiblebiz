"use client";

import Search from "@components/search/Search";
import { useEffect, useState } from "react";
import FaqTitle from "./FaqTitle";
import Tab from "@components/tab/Tab";

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
        tabList={["전체", "회원", "예약", "결제", "취소", "기타"]}
        setSelectedTabIndex={setSelectedTabIndex}
        selectedTabIndex={selectedTabIndex}
      />
      <Search setSearchText={setSearchText} searchAction={searchAction} />
    </article>
  );
}

export default Faq;

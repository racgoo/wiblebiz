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
import useFaqListViewModel from "@view-model/useFaqListViewModel";

function Faq() {
  const [filter, setFilter] = useState("");
  const [selectedMainTabIndex, setSelectedMainTabIndex] = useState(0);
  const [selectedSubTabIndex, setSelectedSubTabIndex] = useState(0);
  const [activeAccordionId, setActiveAccordionId] = useState("");
  const [page, setPage] = useState(1);

  const { data: tabs } = useQuery({
    queryKey: ["tabs"],
    queryFn: fetchTabs,
  });

  const headerTabList = tabs!.map((tab) => tab.name);
  const subTabList = [
    "전체",
    ...tabs![selectedMainTabIndex].categories.map((tab) => tab.name),
  ];

  const categoryName = subTabList[selectedSubTabIndex];
  const faqType = tabs![selectedMainTabIndex].tabId as FaqEnum;

  const { faqData, isLastPage } = useFaqListViewModel({
    categoryName,
    faqType,
    filter,
    page,
  });

  if (!tabs) return new Error();

  function searchAction(text: string) {
    setFilter(text);
  }

  function fetchMoreAction() {
    setPage(page + 1);
  }

  function handleMainTabChange(index: number) {
    setSelectedMainTabIndex(index);
    handleSubTabChange(0);
  }

  function handleSubTabChange(index: number) {
    setSelectedSubTabIndex(index);
    setPage(1);
  }

  return (
    <article className={styles.container}>
      <FaqTitle />
      <HeaderTab
        tabList={headerTabList}
        setSelectedTabIndex={handleMainTabChange}
        selectedTabIndex={selectedMainTabIndex}
      />
      <FaqSearch searchAction={searchAction} />
      <SubTab
        tabList={subTabList}
        setSelectedTabIndex={handleSubTabChange}
        selectedTabIndex={selectedSubTabIndex}
      />
      <div style={{ height: 2, backgroundColor: colors.gray800 }} />
      {faqData.map((accordion) => (
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
      <FaqMoreButton handleClick={fetchMoreAction} isLastPage={isLastPage} />
    </article>
  );
}

export default Faq;

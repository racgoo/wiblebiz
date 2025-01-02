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
import fetchTabs from "@api/tabs.api";
import { useQuery } from "@tanstack/react-query";
import fetchFaqConsult from "@api/faq-consult.api";
import fetchFaqUsage from "@api/faq-usage.api";

type AccordionFaqType = {
  type: string;
  title: string;
  content: string;
};

function Faq() {
  const [searchText, setSearchText] = useState("");
  const [selectedMainTabIndex, setSelectedMainTabIndex] = useState(0);
  const [selectedSubTabIndex, setSelectedSubTabIndex] = useState(0);
  const [activeAccordionId, setActiveAccordionId] = useState("");
  const [accordionList, setAccordionList] = useState<AccordionFaqType[]>([]);
  const [isLastPage, setIsLastPage] = useState(false);
  const [page, setPage] = useState(-1);

  const { data: tabs } = useQuery({
    queryKey: ["tabs"],
    queryFn: fetchTabs,
  });

  useEffect(() => {
    if (page === -1) {
      //reset page
      resetFaq();
      setPage(1);
    } else {
      //refetch
      fetchFaq(page).then((faqList) => {
        setAccordionList((prev) => [...prev, ...(faqList ?? [])]);
      });
    }
  }, [page]);

  if (!tabs) return null;

  const headerTabList = tabs.map((tab) => tab.name);
  const subTabList = [
    "전체",
    ...tabs[selectedMainTabIndex].categories.map((tab) => tab.name),
  ];

  async function fetchFaq(page: number) {
    if (!tabs) return;
    const tabId = tabs[selectedMainTabIndex].tabId;
    const fetchFunction = tabId === "CONSULT" ? fetchFaqConsult : fetchFaqUsage;
    const faqList = await fetchFunction({
      page,
      categoryName: subTabList[selectedSubTabIndex],
      filter: searchText,
    });
    if (!faqList) return [];
    if (faqList.length === 0) {
      setIsLastPage(true);
      return [];
    }
    return faqList.map((faq) => ({
      type: faq.subCategoryName,
      title: faq.question,
      content: faq.answer,
    }));
  }

  function resetFaq() {
    setIsLastPage(false);
    setAccordionList([]);
  }

  function searchAction() {
    setPage(-1);
  }

  function fetchMoreAction() {
    if (page < 1) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  }

  function handleMainTabChange(index: number) {
    setSelectedMainTabIndex(index);
    setSelectedSubTabIndex(0);
    setPage(-1);
  }

  function handleSubTabChange(index: number) {
    setSelectedSubTabIndex(index);
    setPage(-1);
  }

  return (
    <article className={styles.container}>
      <FaqTitle />
      <HeaderTab
        tabList={headerTabList}
        setSelectedTabIndex={handleMainTabChange}
        selectedTabIndex={selectedMainTabIndex}
      />
      <FaqSearch setSearchText={setSearchText} searchAction={searchAction} />
      <SubTab
        tabList={subTabList}
        setSelectedTabIndex={handleSubTabChange}
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
      <FaqMoreButton handleClick={fetchMoreAction} isLastPage={isLastPage} />
    </article>
  );
}

export default Faq;

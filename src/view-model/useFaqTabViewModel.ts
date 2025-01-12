"use client";

import fetchTabs from "@api/tabs.api";
import { MINUTE } from "@shared/constants";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaqEnum } from "@view-model/useFaqListViewModel";

function useFaqTabViewModel() {
  const [selectedMainTabIndex, setSelectedMainTabIndex] = useState(0);
  const [selectedSubTabIndex, setSelectedSubTabIndex] = useState(0);
  const { data: tabs } = useQuery({
    queryKey: ["tabs"],
    queryFn: fetchTabs,
    staleTime: MINUTE,
  });

  const headerTabList = tabs?.map((tab) => tab.name) ?? [];
  const subTabList = [
    "전체",
    ...(tabs?.[selectedMainTabIndex]?.categories.map((tab) => tab.name) ?? []),
  ];
  const categoryName = subTabList[selectedSubTabIndex];
  const faqType = tabs![selectedMainTabIndex].tabId as FaqEnum;

  return {
    headerTabList,
    subTabList,
    categoryName,
    faqType,
    selectedMainTabIndex,
    setSelectedMainTabIndex,
    selectedSubTabIndex,
    setSelectedSubTabIndex,
  };
}

export default useFaqTabViewModel;

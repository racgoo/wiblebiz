import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchFaqConsult from "@api/faq-consult.api";
import fetchFaqUsage from "@api/faq-usage.api";
import { MINUTE } from "@shared/constants";

export enum FaqEnum {
  CONSULT = "CONSULT",
  USAGE = "USAGE",
}

type FaqViewType = {
  type: string;
  title: string;
  content: string;
};

interface useFaqListViewModelProps {
  faqType: FaqEnum;
  filter: string;
  categoryName: string;
  page: number;
}

function useFaqListViewModel({
  faqType,
  filter,
  categoryName,
  page,
}: useFaqListViewModelProps) {
  const [isLastPage, setIsLastPage] = useState(false);
  const [accumulatedData, setAccumulatedData] = useState<FaqViewType[]>([]);

  const fetchFn = faqType === FaqEnum.CONSULT ? fetchFaqConsult : fetchFaqUsage;

  useQuery({
    queryKey: [faqType, page, categoryName, filter],
    queryFn: fetchFaqData,
    staleTime: MINUTE,
  });

  async function fetchFaqData() {
    if (page === 1) {
      setAccumulatedData([]);
    }
    const faqList = await fetchFn({
      page,
      categoryName,
      filter,
    });
    if (!faqList) return [];
    if (faqList.length === 0) {
      setIsLastPage(true);
      return [];
    }
    setIsLastPage(false);
    const newData = faqList.map((faq) => ({
      type: faq.subCategoryName,
      title: faq.question,
      content: faq.answer,
    }));
    setAccumulatedData((prev) => [...prev, ...newData]);
    return newData;
  }
  return {
    faqData: accumulatedData,
    isLastPage,
  };
}

export default useFaqListViewModel;

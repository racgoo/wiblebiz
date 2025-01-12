import { useEffect, useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
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
  const [accumulatedData, setAccumulatedData] = useState<FaqViewType[]>([]);

  const fetchFn = faqType === FaqEnum.CONSULT ? fetchFaqConsult : fetchFaqUsage;

  const { data: queryData } = useQuery({
    queryKey: [faqType, page, categoryName, filter],
    queryFn: fetchFaqData,
    staleTime: MINUTE,
    placeholderData: keepPreviousData,
  });

  async function fetchFaqData() {
    let isLastPage = false;
    const faqList = await fetchFn({
      page,
      categoryName,
      filter,
    });

    if (faqList.length === 0) {
      isLastPage = true;
    }

    const newData = faqList.map((faq) => ({
      type: faq.subCategoryName,
      title: faq.question,
      content: faq.answer,
    }));

    const prevPageData = page === 1 ? [] : accumulatedData;
    const tempAccumulatedData = [...prevPageData, ...newData];
    setAccumulatedData(tempAccumulatedData);
    return { data: tempAccumulatedData, isLastPage };
  }

  return {
    faqData: queryData?.data ?? [],
    isLastPage: queryData?.isLastPage ?? false,
  };
}

export default useFaqListViewModel;

import fetchData from "@shared/fetchData";

type fetchFaqUsageResponse = {
  id: number;
  categoryName: string;
  subCategoryName: string;
  question: string;
  answer: string;
}[];

function fetchFaqUsage(): Promise<fetchFaqUsageResponse> {
  return fetchData("/faq-usage");
}

export default fetchFaqUsage;

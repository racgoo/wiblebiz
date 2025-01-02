import fetchData from "@shared/fetchData";

type fetchFaqUsageResponse = {
  id: number;
  categoryName: string;
  subCategoryName: string;
  question: string;
  answer: string;
}[];

function fetchFaqUsage({
  page,
  categoryName,
  filter,
}: {
  page: number;
  categoryName: string;
  filter: string;
}): Promise<fetchFaqUsageResponse> {
  const categoryField =
    categoryName === "전체" ? "" : `&categoryName=${categoryName}`;
  const filterField = filter === "" ? "" : `&question_like=${filter}`;
  const path = `/faq-usage?_page=${page}&_per_page=10${filterField}${categoryField}`;
  return fetchData(path);
}

export default fetchFaqUsage;

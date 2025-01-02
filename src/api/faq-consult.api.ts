import fetchData from "@shared/fetchData";

type fetchFaqConsultResponse = {
  id: number;
  categoryName: string;
  subCategoryName: string;
  question: string;
  answer: string;
}[];

function fetchFaqConsult({
  page,
  categoryName,
  filter,
}: {
  page: number;
  categoryName: string;
  filter: string;
}): Promise<fetchFaqConsultResponse> {
  const categoryField =
    categoryName === "전체" ? "" : `&subCategoryName=${categoryName}`;
  const filterField = filter === "" ? "" : `&question_like=${filter}`;
  const path = `/faq-consult?_page=${page}&_per_page=10${filterField}${categoryField}`;
  return fetchData(path);
}

export default fetchFaqConsult;

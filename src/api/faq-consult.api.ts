import fetchData from "@shared/fetchData";

type fetchFaqConsultResponse = {
  id: number;
  categoryName: string;
  subCategoryName: string;
  question: string;
  answer: string;
}[];

function fetchFaqConsult(): Promise<fetchFaqConsultResponse> {
  return fetchData("/faq-consult");
}

export default fetchFaqConsult;

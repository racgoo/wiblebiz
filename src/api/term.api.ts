import { STATIC_STALE_TIME } from "@shared/constants";
import fetchData from "@shared/fetchData";

type fetchTermResponse = {
  terms: [
    {
      termsName: string;
      termsVersion: number;
      startDate: number;
      endDate: number;
      contents: string;
    }
  ];
};

function fetchTerm(): Promise<fetchTermResponse> {
  return fetchData("/term", { next: { revalidate: STATIC_STALE_TIME } });
}

export default fetchTerm;

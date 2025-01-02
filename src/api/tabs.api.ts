import { STATIC_STALE_TIME } from "@shared/constants";
import fetchData from "@shared/fetchData";

type fetchTabsResponse = {
  name: string;
  tabId: string;
  categories: {
    categoryID: string;
    name: string;
  }[];
}[];

function fetchTabs(): Promise<fetchTabsResponse> {
  return fetchData("/tabs", { next: { revalidate: STATIC_STALE_TIME } });
}

export default fetchTabs;

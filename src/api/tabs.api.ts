import { STATIC_STALE_TIME } from "@shared/constants";
import fetchData from "@shared/fetchData";

export type TabType = {
  name: string;
  tabId: string;
  categories: {
    categoryID: string;
    name: string;
  }[];
};

type fetchTabsResponse = TabType[];

function fetchTabs(): Promise<fetchTabsResponse> {
  return fetchData("/tabs", { next: { revalidate: STATIC_STALE_TIME } });
}

export default fetchTabs;

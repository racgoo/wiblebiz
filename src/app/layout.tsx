import "@app/globals.css";
import styles from "@app/layout.module.css";
import TopNavigation from "@components/navigation/TopNavigation";
import Footer from "@components/footer/Footer";
import QueryProvider from "@app/QueryProvider";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import fetchTerm from "@api/term.api";
import fetchTabs from "@api/tabs.api";

import { STATIC_STALE_TIME } from "@shared/constants";
import { Fragment } from "react";
import ScrollUpButton from "@components/button/ScrollUpButton";

const queryClient = new QueryClient();

const RootPrefetch = async () => {
  return Promise.allSettled([
    queryClient.prefetchQuery({
      queryKey: ["term"],
      queryFn: fetchTerm,
      staleTime: STATIC_STALE_TIME,
    }),
    queryClient.prefetchQuery({
      queryKey: ["tabs"],
      queryFn: fetchTabs,
      staleTime: STATIC_STALE_TIME,
    }),
  ]);
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await RootPrefetch();
  const dehydratedState = dehydrate(queryClient);
  return (
    <html lang="ko">
      <body style={{ height: "100%" }}>
        <QueryProvider>
          <HydrationBoundary state={dehydratedState}>
            <TopNavigation />
            <main className={styles.container}>
              <Fragment>{children}</Fragment>
            </main>
            <ScrollUpButton />
            <Footer />
          </HydrationBoundary>
        </QueryProvider>
      </body>
    </html>
  );
}

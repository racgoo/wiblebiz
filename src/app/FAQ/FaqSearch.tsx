import styles from "@app/FAQ/FaqSearch.module.css";
import Search from "@components/search/Search";
import { useState } from "react";

interface FaqSearchProps {
  searchAction: (text: string) => void;
}

function FaqSearch({ searchAction }: FaqSearchProps) {
  return (
    <section className={styles.container}>
      <Search setSearchText={() => {}} searchAction={searchAction} />
    </section>
  );
}

export default FaqSearch;

"use client";

import Search from "@components/search/Search";
import { useEffect, useState } from "react";

function Faq() {
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  const searchAction = (text: string) => {
    console.log(text);
  };

  return (
    <article>
      <Search setSearchText={setSearchText} searchAction={searchAction} />
    </article>
  );
}

export default Faq;

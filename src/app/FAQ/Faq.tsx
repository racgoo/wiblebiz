"use client";

import Search from "@components/search/Search";
import CommonText from "@components/text/CommonText";
import { useEffect, useState } from "react";
import FaqTitle from "./FaqTitle";

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
      <FaqTitle />
      <Search setSearchText={setSearchText} searchAction={searchAction} />
    </article>
  );
}

export default Faq;

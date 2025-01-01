"use client";

import styles from "@components/footer/term/Term.module.css";
import TermHeader from "./TermHeader";
import arrowIcon from "@public/icon/select-arrow.svg";
import Image from "next/image";
import { useState } from "react";
import { termData } from "./dummyTermData";

const Term = ({
  handleClose,
  terms = "",
}: {
  handleClose: () => void;
  terms: string;
}) => {
  const [selectedTerm, setSelectedTerm] = useState("");
  const handleSelectTerm = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTerm(e.target.value);
  };
  return (
    <div className={styles.container}>
      <TermHeader handleClose={handleClose} />

      <div style={{ position: "relative" }}>
        <select id="term" className={styles.select} onChange={handleSelectTerm}>
          <option value="2019">2019 ~ 현재</option>
          <option value="2018">2018 ~ 2019</option>
          <option value="2017">2017 ~ 2018</option>
        </select>
        <label htmlFor="term" className={styles.selectArrow}>
          <Image src={arrowIcon} alt="arrow" width={20} height={20} />
        </label>
      </div>

      <section>
        <div
          dangerouslySetInnerHTML={{ __html: termData.terms[0].contents }}
          style={{ width: "100%" }}
        />
      </section>
    </div>
  );
};

export default Term;

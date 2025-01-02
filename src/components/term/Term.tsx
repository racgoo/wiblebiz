"use client";

import styles from "@components/term/Term.module.css";
import TermHeader from "@components/term/TermHeader";
import arrowIcon from "@public/icon/select-arrow.svg";
import Image from "next/image";
import TermDetail from "@components/term/TermDetail";
import { useState } from "react";
import dayjs from "dayjs";
import fetchTerm from "@api/term.api";
import { useQuery } from "@tanstack/react-query";

export interface TermType {
  termsName: string;
  termsVersion: number;
  startDate: number;
  endDate: number;
  contents: string;
}

export interface TermDataType {
  terms: TermType[];
}

const Term = ({ handleClose }: { handleClose: () => void }) => {
  const { data: termData } = useQuery({
    queryKey: ["term"],
    queryFn: fetchTerm,
  });

  const [termContents, setTermContents] = useState(
    termData?.terms[0].contents || ""
  );

  if (!termData) return null;

  const handleSelectTerm = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTermContents = e.target.value;
    setTermContents(selectedTermContents || "");
  };

  function getDuration(start: number, end: number) {
    const startDate = dayjs(start);
    const endDate = dayjs(end);
    const today = dayjs();
    return `${startDate.format("YYYY.MM.DD")} ~ ${
      endDate.isAfter(today) || end === 0
        ? "현재"
        : endDate.format("YYYY.MM.DD")
    }`;
  }

  return (
    <div className={styles.container}>
      <TermHeader handleClose={handleClose} />

      <div style={{ position: "relative", marginTop: 12 }}>
        <select id="term" className={styles.select} onChange={handleSelectTerm}>
          {termData.terms.map((term) => (
            <option key={term.termsVersion} value={term.contents}>
              {getDuration(term.startDate, term.endDate)}
            </option>
          ))}
        </select>
        <label htmlFor="term" className={styles.selectArrow}>
          <Image src={arrowIcon} alt="arrow" width={20} height={20} />
        </label>
      </div>

      <TermDetail content={termContents} />
    </div>
  );
};

export default Term;

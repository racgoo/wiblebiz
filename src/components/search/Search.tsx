"use client";

import styles from "@components/search/Search.module.css";
import searchIcon from "@public/icon/search-icon.svg";
import searchClearIcon from "@public/icon/search-clear-icon.svg";
import Image from "next/image";
import { useRef } from "react";

interface SearchProps {
  setSearchText: (text: string) => void;
  searchAction: (text: string) => void;
  marginTop?: number;
  marginBottom?: number;
}

function Search({
  setSearchText,
  searchAction,
  marginTop = 0,
  marginBottom = 0,
}: SearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      setSearchText("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchAction(inputRef.current?.value || "");
    }
  };

  return (
    <div
      className={styles.container}
      style={{ marginTop: marginTop, marginBottom: marginBottom }}
    >
      <input
        ref={inputRef}
        type="text"
        className={styles.search}
        onChange={handleChange}
        placeholder="찾으시는 내용을 입력해 주세요"
        onKeyDown={handleKeyDown}
      />

      {inputRef.current?.value && (
        <Image
          onClick={handleClear}
          className={styles.clearButton}
          src={searchClearIcon}
          alt="지우기"
        />
      )}

      <Image src={searchIcon} alt="검색" className={styles.searchButton} />
    </div>
  );
}

export default Search;

import styles from "@app/FAQ/FaqSearch.module.css";
import Search from "@components/search/Search";

interface FaqSearchProps {
  setSearchText: (text: string) => void;
  searchAction: (text: string) => void;
}

function FaqSearch({ setSearchText, searchAction }: FaqSearchProps) {
  return (
    <section className={styles.container}>
      <Search setSearchText={setSearchText} searchAction={searchAction} />
    </section>
  );
}

export default FaqSearch;

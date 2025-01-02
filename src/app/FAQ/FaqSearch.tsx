import styles from "@app/FAQ/FaqSearch.module.css";
import Search from "@components/search/Search";

interface FaqSearchProps {
  setSearchText: (text: string) => void;
  searchAction: (text: string) => void;
  marginBottom?: number;
  marginTop?: number;
}

function FaqSearch({
  setSearchText,
  searchAction,
  marginBottom = 0,
  marginTop = 0,
}: FaqSearchProps) {
  return (
    <section
      className={styles.container}
      style={{ marginBottom: marginBottom, marginTop: marginTop }}
    >
      <Search setSearchText={setSearchText} searchAction={searchAction} />
    </section>
  );
}

export default FaqSearch;

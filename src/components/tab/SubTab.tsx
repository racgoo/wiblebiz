"use client";

import styles from "@components/tab/SubTab.module.css";
import CommonText from "@components/text/CommonText";
import useMedia, { MediaType } from "@hooks/useMedia";
import clsx from "clsx";

const textSize: Record<MediaType, number> = {
  loading: 14,
  mobile: 14,
  tablet: 16,
  pc: 18,
};

interface TabProps {
  tabList: string[];
  setSelectedTabIndex: (index: number) => void;
  selectedTabIndex: number;
}

function SubTab({ tabList, setSelectedTabIndex, selectedTabIndex }: TabProps) {
  const media = useMedia();

  const handleTabClick = (index: number) => {
    setSelectedTabIndex(index);
  };

  return (
    <ul className={styles.container}>
      {tabList.map((tab, index) => (
        <li
          key={tab}
          onClick={() => handleTabClick(index)}
          className={clsx(styles.tabItem, {
            [styles.selected]: selectedTabIndex === index,
          })}
        >
          <CommonText
            type="regular"
            size={textSize[media]}
            color={selectedTabIndex === index ? "white" : "gray800"}
          >
            {tab}
          </CommonText>
        </li>
      ))}
    </ul>
  );
}

export default SubTab;

"use client";
import styles from "~/components/blocks/header/_asset/styles.module.scss";
import SearchInput from "~/components/primitives/header/search-input/page";
import SearchButtonBlock from "./search-buton/page";
import { ChangeEvent, useState } from "react";

export default function SearchFormBlock() {
  const [searchText, setSearchText] = useState("");
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <div className={styles.searchFormWrapper}>
      <SearchInput
        searchText={searchText}
        handlerInputChange={handleInputChange}
        placeholder={"Search in WakZoo"}
      />
      <SearchButtonBlock />
    </div>
  );
}

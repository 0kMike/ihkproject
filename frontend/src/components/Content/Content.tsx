import React from 'react';
import styles from './Content.module.css';
import SearchForm from "./SearchForm/SearchForm";
import {IJob} from "../../interfaces/IJob";

interface IBodyProps {
  activeSearchTags: string[];
  toggleActiveSearchTag(searchTag: string): void;
  isSearchButtonActive: boolean;
  initiateSearch(): void;
  setZipCode(zip: string): void;
  zipCode: string;
  searchResult: IJob[];
}

function Content(props: IBodyProps) {
  const {activeSearchTags, toggleActiveSearchTag, isSearchButtonActive, initiateSearch, setZipCode, zipCode, searchResult} = props;

  return (
    <main className={styles.body}>
      <h1 className={styles.header}>Fachpersonal einstellen</h1>
      <SearchForm
        activeSearchTags={activeSearchTags}
        toggleActiveSearchTag={toggleActiveSearchTag}
        isSearchButtonActive={isSearchButtonActive}
        initiateSearch={initiateSearch}
        setZipCode={setZipCode}
        zipCode={zipCode}
        searchResult={searchResult}
      />
    </main>
  )
}

export default Content;
import React from 'react';
import styles from './SearchForm.module.css';
import SearchTagSelection from './SearchTagSelection/SearchTagSelection';
import SearchRegion from './SearchRegion/SearchRegion';
import SearchResult from './SearchResult/SearchResult';
import SearchButton from './SearchButton/SearchButton';
import {IJob} from "../../../interfaces/IJob";

interface IContentProps {
  activeSearchTags: string[];
  toggleActiveSearchTag(SearchTag: string): void;
  isSearchButtonActive: boolean;
  initiateSearch(): void;
  setZipCode(zip: string): void;
  zipCode: string;
  searchResult: IJob[];
}

function SearchForm(props: IContentProps) {
  const {activeSearchTags, toggleActiveSearchTag, isSearchButtonActive, initiateSearch, setZipCode, zipCode, searchResult} = props;


  return (
    <main className={styles.content}>
      <h2 className={styles.header}>1. Fachkraft auswählen:</h2>
      <SearchTagSelection
        activeSearchTags={activeSearchTags}
        toggleActiveSearchTag={toggleActiveSearchTag}/>
      <h2 className={styles.header}>2. Postleitzahl & Radius:</h2>
      <SearchRegion
        setZipCode={setZipCode}
        zipCode={zipCode}/>
      <h2 className={styles.header}>3. Ergebnis:</h2>
      <SearchResult
        searchResult={searchResult}
      />
      <SearchButton
        isButtonActive={isSearchButtonActive}
        buttonAction={initiateSearch}
      />
    </main>
  )
}

export default SearchForm;
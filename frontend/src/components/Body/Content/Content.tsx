import React from 'react';
import styles from './Content.module.css';
import SearchTagSelection from './SearchTagSelection/SearchTagSelection';
import SearchRegion from './SearchRegion/SearchRegion';
import SearchResult from './SearchResult/SearchResult';
import SearchButton from './SearchButton/SearchButton';

interface IContentProps {
  activeSearchTags: string[];
  toggleActiveSearchTag(SearchTag: string): void;
  isSearchButtonActive: boolean;
  initiateSearch(): void;
}

function Content(props: IContentProps) {

  return (
    <main className={styles.content}>
      <h2 className={styles.header}>1. Fachkraft auswählen:</h2>
      <SearchTagSelection
        activeSearchTags={props.activeSearchTags}
        toggleActiveSearchTag={props.toggleActiveSearchTag}/>
      <h2 className={styles.header}>2. Postleitzahl & Radius:</h2>
      <SearchRegion/>
      <h2 className={styles.header}>3. Ergebnis:</h2>
      <SearchResult/>
      <SearchButton
        isButtonActive={props.isSearchButtonActive}
        buttonAction={props.initiateSearch}
      />
    </main>
  )
}

export default Content;
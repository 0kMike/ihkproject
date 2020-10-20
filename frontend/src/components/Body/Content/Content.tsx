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

  let headerCount: number = 1;

  const increaseHeaderCount = () => {
    headerCount++;
  }

  return (
    <main className={styles.content}>
      <h2 className={styles.header}>{headerCount}. Fachkraft auswählen:</h2>
      {increaseHeaderCount()}
      <SearchTagSelection
        activeSearchTags={props.activeSearchTags}
        toggleActiveSearchTag={props.toggleActiveSearchTag}/>
      <h2 className={styles.header}>{headerCount}. Postleitzahl & Radius:</h2>
      {increaseHeaderCount()}
      <SearchRegion/>
      <h2 className={styles.header}>{headerCount}. Ergebnis:</h2>
      <SearchResult/>
      <SearchButton
        isButtonActive={props.isSearchButtonActive}
        buttonAction={props.initiateSearch}
      />
    </main>
  )
}

export default Content;
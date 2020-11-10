import React from 'react';
import styles from './Body.module.css';
import Content from "./Content/Content";

interface IBodyProps {
  activeSearchTags: string[];
  toggleActiveSearchTag(searchTag: string): void;
  isSearchButtonActive: boolean;
  initiateSearch(): void;
  setZipCode(zip: string): void;
  zipCode: string
}

function Body(props: IBodyProps) {
  const {activeSearchTags, toggleActiveSearchTag, isSearchButtonActive, initiateSearch, setZipCode, zipCode} = props;

  return (
    <main className={styles.body}>
      <h1 className={styles.header}>Fachpersonal einstellen</h1>
      <Content
        activeSearchTags={activeSearchTags}
        toggleActiveSearchTag={toggleActiveSearchTag}
        isSearchButtonActive={isSearchButtonActive}
        initiateSearch={initiateSearch}
        setZipCode={setZipCode}
        zipCode={zipCode}
      />
    </main>
  )
}

export default Body;
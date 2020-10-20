import React from 'react';
import styles from './Body.module.css';
import Content from "./Content/Content";

interface IBodyProps {
  activeSearchTags: string[];
  toggleActiveSearchTag(searchTag: string): void;
  isSearchButtonActive: boolean;
  initiateSearch(): void;
}

function Body(props: IBodyProps) {
  return (
    <main className={styles.body}>
      <h1 className={styles.header}>Fachpersonal einstellen</h1>
      <Content
        activeSearchTags={props.activeSearchTags}
        toggleActiveSearchTag={props.toggleActiveSearchTag}
        isSearchButtonActive={props.isSearchButtonActive}
        initiateSearch={props.initiateSearch}
      />
    </main>
  )
}

export default Body;
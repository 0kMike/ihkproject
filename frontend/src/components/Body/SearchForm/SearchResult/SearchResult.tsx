import React from 'react';
import styles from './SearchResult.module.css';

interface IResultArea {

}

function SearchResult(props: IResultArea) {
  return (
    <section className={styles.resultArea}>
      <div className={styles.timeLineGraph}/>
      <div className={styles.liveResults}/>
    </section>
  )
}

export default SearchResult;
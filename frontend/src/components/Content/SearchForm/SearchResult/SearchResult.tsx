import React, {useEffect, useState} from 'react';
import styles from './SearchResult.module.css';
import {IJob} from "../../../../interfaces/IJob";
import {generateSearchResultDisplay} from "../../../../provider/HistoryProvider";
import {Line} from "react-chartjs-2";
import {generateChart} from "../../../../provider/ChartProvider";

interface IResultArea {
  searchResult: IJob[];
}

const SearchResult = (props: IResultArea) => {
  const {searchResult} = props;

  const displayResult = generateSearchResultDisplay(searchResult);

  const chartData = generateChart(displayResult)

  return (
    <section className={styles.resultArea}>
      <div className={styles.history}>
        {displayResult.length > 0 && <Line data={chartData} height={80}/>}
      </div>
      <div className={styles.liveResults}/>
    </section>
  )
}

export default SearchResult;
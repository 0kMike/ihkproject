import React from 'react';
import styles from './SearchTagSelection.module.css';
import {searchableJobs} from '../../../../provider/JobProvider';
import SearchTag from './SearchTag/SearchTag';

interface ISearchCriteria {
  activeSearchTags: string[];
  toggleActiveSearchTag(searchTag: string): void;
}

function SearchTagSelection(props: ISearchCriteria) {

  return (
    <div className={styles.seachTagSelection}>
      {
        searchableJobs.map((item, index) => {
          return (
            <SearchTag key={index} tag={item} isActive={props.activeSearchTags.some(element => {return element === item})} toggleActiveSearchTag={props.toggleActiveSearchTag}/>
          )
        })
      }
    </div>
  )
}

export default SearchTagSelection;
import React from 'react';
import styles from './SearchTag.module.css';

interface ISearchTag {
  tag: string;
  isActive: boolean;
  toggleActiveSearchTag(searchTag: string): void;
}

function SearchTag(props: ISearchTag) {

  const searchTagClickHandler = () => {
    props.toggleActiveSearchTag(props.tag)
  }

  const searchtagStyle = props.isActive ? styles.searchTagActive : styles.searchTag;
  const iconStyle = props.isActive ? styles.plusActive : styles.plus;

  return (
        <main className={searchtagStyle} onClick={searchTagClickHandler}>
          <div className={iconStyle}/>
          <div>
            {props.tag}
          </div>
        </main>
  )
}

export default SearchTag;
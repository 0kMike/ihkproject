import React from 'react';
import styles from './SearchTag.module.css';

interface ISearchTag {
  tag: string;
  isActive: boolean;

  toggleActiveSearchTag(searchTag: string): void;
}

function SearchTag(props: ISearchTag) {
  const {tag, isActive, toggleActiveSearchTag} = props;

  const searchTagClickHandler = () => {
    toggleActiveSearchTag(tag)
  }

  const searchtagStyle = isActive ? styles.searchTagActive : styles.searchTag;
  const iconStyle = isActive ? styles.plusActive : styles.plus;

  return (
    <main className={searchtagStyle} onClick={searchTagClickHandler}>
      <div className={iconStyle}/>
      <div>
        {tag}
      </div>
    </main>
  )
}

export default SearchTag;
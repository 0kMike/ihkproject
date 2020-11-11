import React from 'react';
import styles from './SearchButton.module.css';

interface ISearchButton {
  isButtonActive: boolean;
  buttonAction(): void;
}

function SearchButton(props: ISearchButton) {
  const {isButtonActive, buttonAction} = props;

  const buttonClickHandler = () => {
    buttonAction();
  }

  return (
    <>
      {
        isButtonActive ?
          <input type="button" className={styles.searchButtonActive} value="Suchen" onClick={buttonClickHandler}/>
          :
          <input type="button" className={styles.searchButtonInactive} value="Suchen"/>
      }
    </>
  )
}

export default SearchButton;
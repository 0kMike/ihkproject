import React, {useEffect, useRef} from 'react';
import styles from './SearchRegion.module.css';

interface ISearchRegionSelection {
  setZipCode(zip: string): void;
  zipCode: string;
}

function SearchRegion(props: ISearchRegionSelection) {
  const {setZipCode, zipCode} = props;

  useEffect(() => {
      rangeNumber.current.value = "25 km";
    }
  )

  const zipCodeInput = useRef<any>();
  const rangeNumber = useRef<any>();

  function validate(zip: string) {
    return zip && zip.length === 5 && /^\d+$/.test(zip);
  }

  const zipCodeInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {

    if (validate(event.target.value)) {
      setZipCode(event.target.value);
    } else {
      setZipCode('');
    }
  }

  const radiusChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    rangeNumber.current.value = event.target.value + " km";
  }

  return (
    <div className={styles.searchRegionSelection}>
      <section className={styles.zip}>
        <p className={styles.inputHeader}>Postleitzahl:</p>
        <input type="text" className={validate(zipCode) ? styles.zipInput : styles.zipInputError}
               onChange={zipCodeInputChangeHandler} maxLength={5} ref={zipCodeInput}/>
               <div className={validate(zipCode) ? styles.validationIconValid : styles.validationIconInvalid}/>
      </section>
      <section className={styles.zip}>
        <p className={styles.inputHeader}>Radius:</p>
        <input type="range" className={styles.radius} min="10" max="50" step="5" defaultValue="25"
               onChange={radiusChangeHandler}/>
        <input type="text" className={styles.rangeNumber} ref={rangeNumber} disabled/>
      </section>
    </div>
  )
}

export default SearchRegion;

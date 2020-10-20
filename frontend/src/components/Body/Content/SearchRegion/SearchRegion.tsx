import React, {useEffect, useRef, useState} from 'react';
import styles from './SearchRegion.module.css';
import {type} from "os";

interface ISearchRegionSelection {

}

function SearchRegion(props: ISearchRegionSelection) {

  const [zipCode, setZipCode] = useState<string>('');

  useEffect(() => {
      rangeNumber.current.value = "25 km";
    }
  )

  const zipCodeInput = useRef<any>();
  const rangeNumber = useRef<any>();

  const zipCodeInputChangeHandler = (event: any) => {
    let validation = validate(event.target.value);

    if (validation.isLength && validation.isNumber) {
      setZipCode(event.target.value);
    } else {
      setZipCode('');
    }
  }

  function validate(zip: string) {
    return {
      isNumber: /^\d+$/.test(zip),
      isLength: zip && zip.length === 5,
    };
  }

  const radiusChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    rangeNumber.current.value = event.target.value + " km";
  }

  const errors = validate(zipCode)

  return (
    <div className={styles.searchRegionSelection}>
      <section className={styles.zip}>
        <p className={styles.inputHeader}>Postleitzahl:</p>
        <input type="text" className={errors.isNumber || errors.isLength ? styles.input : styles.inputError} onChange={zipCodeInputChangeHandler} maxLength={5} ref={zipCodeInput}/>
      </section>
      <section className={styles.zip}>
        <p className={styles.inputHeader}>Radius:</p>
        <input type="range" className={styles.radius} min="10" max="50" step="5" defaultValue="25" onChange={radiusChangeHandler}/>
        <input type="text" className={styles.rangeNumber} ref={rangeNumber} disabled/>
      </section>
    </div>
  )
}

export default SearchRegion;

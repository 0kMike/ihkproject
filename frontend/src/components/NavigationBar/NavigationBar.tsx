import React from 'react';
import styles from './NavigationBar.module.css';
import timelogCareLogo from '../../assets/img/timelogCareLogo.svg';

interface INavigationBarProps {

}

// TODO remove navitems and add timelog care logo floating left
function NavigationBar(props: INavigationBarProps) {
  return (
    <header className={styles.navigationBar}>
      <img src={timelogCareLogo} className={styles.logo} alt={"Logo der Timelog Care GmbH"}/>
    </header>
  )
}

export default NavigationBar;
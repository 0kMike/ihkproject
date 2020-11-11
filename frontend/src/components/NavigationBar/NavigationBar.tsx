import React from 'react';
import styles from './NavigationBar.module.css';
import profile from '../../assets/img/profile.svg';

interface INavigationBarProps {

}
// TODO remove navitems and add timelog care logo floating left
function NavigationBar(props: INavigationBarProps) {
  return (
    <header className={styles.navigationBar}>
      <section className={styles.menu}>
        <span className={styles.item}>Fachkraft finden</span>
        <div className={styles.seperator}/>
        <span className={styles.item}>Buchungen verwalten</span>
        <div className={styles.seperator}/>
        <span className={styles.item}>FAQ</span>
        <div className={styles.seperator}/>
        <span className={styles.itemColored}>+49 721 / 989 732 0</span>
        <div className={styles.seperator}/>
        <span className={styles.item}>
          Mein Profil
        </span>
          <img src={profile} alt='profile picture' className={styles.profilePicture}/>
      </section>
    </header>
  )
}

export default NavigationBar;
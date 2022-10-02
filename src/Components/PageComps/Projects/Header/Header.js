import React from 'react';
import styles from './Header.module.css';

function Header() {
    // Browse all projects header
    return (
        <div className={styles.projecstHeader}>
            <div className={styles.h3}>What I offer</div>
            <div className={styles.h1}>My Apps Look Modern & Act Modern</div>
            <div className={styles.text}>I develop applications for web and mobile platforms using the latest and greatest technologies.</div>
        </div>
    );
}

export default Header;
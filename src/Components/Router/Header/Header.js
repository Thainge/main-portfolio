import React, { useEffect, useState } from 'react';
import { ContextFunction } from '../../../Context/ContextProvider';
import { Link } from "react-router-dom";
import styles from './Header.module.css';

function Header() {
    const obj = ContextFunction();
    const { closeIcon, setCloseIcon } = obj;

    // Fixed header
    return (
        <div className={styles.fixedHeader}>
            {/* Menu Header */}
            <div className={styles.menuHeaderLeft}>
                {/* Menu Text and Icon */}
                <Link onClick={() => setCloseIcon(false)} className={styles.hiddenLink} to={"/"}>
                    <div className={styles.menuHeaderDiv} style={closeIcon ? { color: '#878a8f' } : { color: 'black' }}>
                        <img className={styles.circleImage} src={require(closeIcon ? './../../../assets/menuLastName.png' : './../../../assets/lastName.png')}></img>
                        <div className={styles.headerText}>
                            <div className={styles.h2}>Tobey Hainge</div>
                            <div className={styles.h4}>Web & UI Designer</div>
                        </div>
                    </div>
                </Link>
            </div>

            <div className={closeIcon ? `${styles.menuHeaderRight} ${styles.extraPadding}` : styles.menuHeaderRight}>
                {/* Close Menu Icon */}
                <div className={styles.close} onClick={() => { setCloseIcon(!closeIcon) }}>
                    <div className={styles.closeText} style={closeIcon ? { color: '#878a8f' } : { color: 'black' }}>Menu</div>
                    <div className={closeIcon ? `${styles.barsContainer} ${styles.change}` : `${styles.barsContainer} ${styles.barsOnly}`}>
                        <div className={styles.bar1} style={closeIcon ? { backgroundColor: '#878a8f' } : { backgroundColor: 'black' }}></div>
                        <div className={styles.bar2} style={closeIcon ? { backgroundColor: '#878a8f' } : { backgroundColor: 'black' }}></div>
                        <div className={styles.bar3} style={closeIcon ? { backgroundColor: '#878a8f' } : { backgroundColor: 'black' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
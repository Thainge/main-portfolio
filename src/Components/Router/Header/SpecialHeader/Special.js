import React, { useState, useEffect } from 'react';
import { ContextFunction } from '../../../../Context/ContextProvider';
import { Link } from "react-router-dom";
import styles from './Special.module.css';

function SpecialHeader() {
    const obj = ContextFunction();
    const { closeIcon, setCloseIcon } = obj;

    // Sete value for scroll listener
    const [belowTen, setBelowTen] = useState(true);
    let TriggeredScrollValue = 100

    // Scroll listener, logs document position, if it goes below 100 it will trigger style changes
    useEffect(() => {
        const handleScroll = event => {
            if (window.scrollY < TriggeredScrollValue) {
                setBelowTen(true)
            } else {
                setBelowTen(false)
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Special Header used for setting colors white at top of page
    return (
        <div className={styles.fixedHeader}>
            {/* Menu Header */}
            <div className={styles.menuHeaderLeft}>
                {/* Menu Text and Icon */}
                <Link onClick={() => setCloseIcon(false)} className={styles.hiddenLink} to={"/"}>
                    <div className={styles.menuHeaderDiv} style={belowTen ? { color: '#fff' } : { color: 'black' }}>
                        <img className={styles.circleImage} src={require(belowTen ? './../../../../assets/lightLastName.png' : './../../../../assets/lastName.png')}></img>
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
                    <div className={styles.closeText} style={belowTen ? { color: '#fff' } : { color: 'black' }}>Menu</div>
                    <div className={closeIcon ? `${styles.barsContainer} ${styles.change}` : `${styles.barsContainer} ${styles.barsOnly}`}>
                        <div className={styles.bar1} style={belowTen ? { backgroundColor: '#fff' } : { backgroundColor: 'black' }}></div>
                        <div className={styles.bar2} style={belowTen ? { backgroundColor: '#fff' } : { backgroundColor: 'black' }}></div>
                        <div className={styles.bar3} style={belowTen ? { backgroundColor: '#fff' } : { backgroundColor: 'black' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpecialHeader;
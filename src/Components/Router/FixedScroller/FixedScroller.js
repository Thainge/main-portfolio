import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import styles from './FixedScroller.module.css'

function FixedScroller() {

    // scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    // Sete value for scroll listener
    const [belowTen, setBelowTen] = useState(true);
    let TriggeredScrollValue = 1000

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

    return (
        <>
            {/* Fixed email & scroll to top */}
            <div className={styles.fixedIcons}>

                <div className={`${styles.fixedEmail} ${styles.fixedIcons}`}>
                    <Link to={"/contact"} className={styles.fixednoLinkStyles}>
                        <div className={styles.fixedEmailButton}>
                            <div className={styles.fixedemailIcon}>✉ <Fade delay={0}><b className={styles.fixedemailText}>Contact Me</b></Fade></div>
                        </div>
                    </Link>
                </div>

                <div className={`${styles.fixedScroll} ${styles.fixedIcons}`} style={belowTen ? { opacity: '0', pointerEvents: 'none', pointer: 'none' } : { opacity: '1' }}>
                    <div className={styles.fixedScrollButton} onClick={scrollToTop}>
                        <div className={styles.fixedscrollText}>🡡</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FixedScroller;
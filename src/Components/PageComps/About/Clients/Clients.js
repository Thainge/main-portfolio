import React from 'react';
import styles from './Clients.module.css';
import Fade from 'react-reveal/Fade';

function Clients({ brands }) {
    // maps all brands worked with
    return (
        <>
            {/* CLients */}
            <div className={styles.AboutChildContainer}>
                <div className={styles.AboutHeader}>
                    <Fade up delay={100}><div className={styles.h3}>Clients</div></Fade>
                    <Fade up delay={200}><div className={styles.h1}>Some of the brands I’ve worked with</div></Fade>
                    <Fade up delay={300}><div className={styles.text}>Over the past 2 years I’ve had the pleasure to work with customers from various sectors on many interesting projects.</div></Fade>
                </div>
                <Fade up delay={400} distance={'5em'}>
                    <div className={styles.ClientImages}>
                        {
                            brands.map((item, index) => (
                                <img key={index} src={item.src} className={styles.brandImage} />
                            ))
                        }
                    </div>
                </Fade>
            </div>
        </>
    );
}

export default Clients;
import React from 'react';
import styles from './AboutHeader.module.css';
import Fade from 'react-reveal/Fade';

function AboutHeader() {
    return (
        <>
            {/* About Header */}
            <div className={`${styles.AboutChildContainer} ${styles.AboutHeaderContainer}`}>
                <div className={styles.AboutHeader}>
                    <Fade up delay={300} distance={'5em'}>
                        <div className={styles.h3}>A few words about me</div>
                    </Fade>
                    <Fade up delay={600}>
                        <div className={styles.h1}>I'm Tobey Hainge, a multidisciplinary designer who focuses on building real world applications. I specialize in responsive websites and functional user interfaces for both websites and Android/IOS.</div>
                    </Fade>
                    <Fade up delay={900}>
                        <div className={styles.text}>Over the past 3 years I have been building applications for many clients to help them connect with their targeted audience. I usually work on a small team to help deliver the application to the client but sometimes I do work solo. In my spare time I enjoy gaming, exercising, and skating.</div>
                    </Fade>
                </div>
            </div>
        </>
    );
}

export default AboutHeader;
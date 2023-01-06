import React from 'react';
import styles from './Experience.module.css';
import Fade from 'react-reveal/Fade';

function Experience({ JsonData }) {
    // Maps all position data
    return (
        <>
            {/* Experience */}
            <div className={styles.AboutChildContainer}>
                <div className={styles.AboutHeader}>
                    <Fade up delay={100}><div className={styles.h3}>Over 3 years of experience</div></Fade>
                    <Fade up delay={200}><div className={styles.h1}>Experience</div></Fade>
                    <Fade up delay={300}><div className={styles.text}>I have been lucky enough to meet with a wide variety of clients from all over the world. Through me they are able to build the application they want and I help them to connect to their audience on the platform they desire.</div></Fade>
                </div>

                <Fade up delay={400} distance={'5em'}>
                    <div className={styles.ExperiencePositions}>
                        {JsonData.Positions.map((item, index) => (
                            <div className={styles.ExperienceRow} key={index}>
                                <div className={styles.ExperienceBoldText}>{item.h1}</div>
                                <div className={styles.ExperienceText}>{item.text}</div>
                                <div className={styles.ExperienceText}>{item.date}</div>
                            </div>
                        ))}
                    </div>
                </Fade>
            </div>
        </>
    );
}

export default Experience;
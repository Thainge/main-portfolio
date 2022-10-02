import React from 'react';
import styles from './ServicesTools.module.css';
import Fade from 'react-reveal/Fade';

function ServicesTools({ JsonData }) {
    // Maps projects individual services and tools used from projectsarray
    return (
        <>
            {/* About Design Services & Tools */}
            <div className={`${styles.AboutChildContainer} ${styles.AboutServices}`}>
                <div className={styles.DesignSection}>
                    <Fade up delay={100} duration={800}>
                        <div className={styles.h3}>Design Services</div>
                    </Fade>
                    <Fade up delay={300} duration={800}>
                        <div className={styles.DesignText}>
                            {
                                JsonData.Services.map((item, index) => (
                                    <b key={index} className={styles.removeBold}>
                                        {item.name}
                                        <em className={styles.Em} key={index}> / </em>
                                    </b>
                                ))
                            }
                        </div>
                    </Fade>
                </div>
                <div className={styles.DesignSection}>
                    <Fade up delay={100} duration={800}>
                        <div className={styles.h3}>Tools I Use</div>
                    </Fade>
                    <Fade up delay={300} duration={800}>
                        <div className={styles.DesignText}>
                            {
                                JsonData.Tools.map((item, index) => (
                                    <b key={index} className={styles.removeBold}>
                                        {item.name}
                                        <em className={styles.Em} key={index}> / </em>
                                    </b>
                                ))
                            }
                        </div>
                    </Fade>
                </div>
            </div>
        </>
    );
}

export default ServicesTools;
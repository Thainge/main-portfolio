import React from 'react';
import styles from './footer.module.css';
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

function Footer({ project }) {
    // Footer on dynamic projects page to go to next project in array
    return (
        <>
            {/* Next Project */}
            <div className={styles.nextProject}>
                <Fade up distance={'3em'}>
                    <div className={styles.h3}>See also</div>
                    <Link to={`/projects/${project.route}`}><button className={`${styles.buttonLinkHome} ${styles.largerLink}`}>Next Project ➜</button></Link>
                    <div className={styles.normalText}>{project.name}
                        <b className={styles.normalText2}> {project.header}</b>
                    </div>
                </Fade>
            </div>
        </>
    );
}

export default Footer;
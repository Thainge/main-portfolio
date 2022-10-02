import React from 'react';
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import styles from './NeedDesigner.module.css';

function NeedDesigner() {
    return (
        <>
            {/* Need A Designer Section */}
            <div className={styles.needDesignerHome}>
                <Fade up>
                    <div className={styles.h3Home}>Need A Developer?</div>
                    <Link to={"/contact"}><button href="#" className={`${styles.buttonLinkHome} ${styles.largerLink}`}>Let's work together ➜</button></Link>
                </Fade>
            </div>
        </>
    );
}

export default NeedDesigner;
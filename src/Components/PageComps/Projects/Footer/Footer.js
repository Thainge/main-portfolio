import React from 'react';
import styles from './Footer.module.css';
import Fade from 'react-reveal/Fade'
import { ContextFunction } from '../../../../Context/ContextProvider';

function Footer({ ProjectsData }) {
    const obj = ContextFunction();
    const { index, setIndex, projectsArray, setProjectsArray } = obj;

    // Load more items
    const loadMore = () => {
        // Increase item count by 8
        let newIndex = index + 8
        setIndex(newIndex)

        // Set map array with +8 items
        let loadedProjects = ProjectsData.slice(0, newIndex);
        setProjectsArray(loadedProjects)
    }

    return (
        <div className={styles.finishedSection}>
            {
                projectsArray.length === ProjectsData.length ? <div className={`${styles.projectButtonContainer} ${styles.FinishedText}`}>That's it!</div>
                    :
                    <Fade up>
                        <div className={styles.projectButtonContainer}>
                            <button onClick={loadMore} className={`${styles.buttonLinkHome} ${styles.largerLink}`}>Load More</button>
                        </div>
                    </Fade>
            }
        </div>
    );
}

export default Footer;
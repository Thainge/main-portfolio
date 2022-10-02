import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './AllProjects.module.css';
import Fade from 'react-reveal/Fade'
import { ContextFunction } from '../../../../Context/ContextProvider';

function AllProjects({ ProjectsData }) {
    const obj = ContextFunction();
    const { UserObject, setUserObject, index, projectsArray, setProjectsArray } = obj;

    // Grid styles
    const [boxGrid, setBoxGrid] = useState(true);

    // Toggles to box layout
    const toggledBoxGrid = () => {
        setBoxGrid(true);
        setUserObject({ ...UserObject, boxgrid: true })
    }

    // Toggles to column layout
    const toggledColumnGrid = () => {
        setBoxGrid(false);
        setUserObject({ ...UserObject, boxgrid: false })
    }

    // Initial sort order
    useEffect(() => {
        // Sets initial grid styles from localstorage
        if (UserObject.boxgrid === true) {
            setBoxGrid(true);
        } else if (UserObject.boxgrid === false) {
            setBoxGrid(false);
        }

        // Sets initial array sorting from localstorage
        if (UserObject.array) {
            let sortedArray = UserObject.array;
            // Set initial localstorage array to 8 at first
            let splicedArray = sortedArray.slice(0, index)
            setProjectsArray(splicedArray)
        } else {
            // else return normal array
            let initialArray = ProjectsData.slice(0, index);
            setProjectsArray(initialArray)
        }
    }, [])

    return (
        <>
            {/* Sort from column to box icons */}
            <div className={styles.GridChangersContainer}>
                <div onClick={() => toggledColumnGrid()}><img className={styles.gridChangerImage} src={require('./../../../../assets/column.png')} /></div>
                <div onClick={() => toggledBoxGrid()}><img className={styles.gridChangerImage} src={require('./../../../../assets/boxes.png')} /></div>
            </div>

            {/* All projects */}
            <div className={`${styles.imagesContainer} ${boxGrid ? styles.imagesBoxContainer : styles.imagesColumnContainer}`}>
                {
                    projectsArray.map((item, index) => (
                        <Fade key={index}>
                            <Link to={`/projects/${item.route}`} className={styles.noLinkStyles}>
                                <div className={styles.imageContainer} >
                                    <div className={`${styles.BothProjects} ${boxGrid ? styles.project : styles.projectColumn}`} style={{ backgroundImage: `url("${item.img}")` }}>
                                        <div className={styles.projectText}>
                                            <div className={styles.projectDate}>{item.date}</div>
                                            <div className={styles.projectHeader}>{item.header}</div>
                                            <Fade duration={200} up>
                                                <div className={styles.viewProject}>View Projects ➜</div>
                                            </Fade>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Fade>
                    ))
                }
            </div>
        </>
    );
}

export default AllProjects;
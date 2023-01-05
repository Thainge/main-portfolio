import React from 'react';
import { ContextFunction } from '../../../../Context/ContextProvider';
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import styles from './HomeProjects.module.css';

function HomeProjects({ ProjectsData }) {
    const obj = ContextFunction();
    const { projectsRef } = obj;

    // Sets shown home projects to only 8
    const FewerProjects = ProjectsData.slice(0, 8);

    return (
        <>
            {/* Projects Section */}
            <div className={styles.projectsContainer} ref={projectsRef}>

                <Fade up delay={100} duration={800}>
                    <div className={styles.textContainer}  >
                        <div className={styles.h3Home}>Selected Projects</div>
                        <div className={styles.h1Home}>Projects</div>
                    </div>
                </Fade>

                <div className={styles.projectsGrid} name='ProjectsSection'>
                    {
                        // Shows first 8 projects from Projects array
                        FewerProjects.map((item, index) => (
                            <Fade up duration={800} distance={'2em'} key={index}>
                                {
                                    item.link.includes('Android')
                                        ? <Link to={`projects/${item.route}`} target="_blank" className={styles.noLinkStyles}>
                                            <div className={styles.imageContainer} >
                                                <div className={styles.project} style={{ backgroundImage: `url("${item.img}")` }}>
                                                    <div className={styles.projectText}>
                                                        <div className={styles.projectDate}>{item.date}</div>
                                                        <div className={styles.projectHeader}>{item.header}</div>
                                                        <div className={styles.projectUnder}>{item.underText}</div>
                                                        <Fade duration={500} distance={'1em'} up>
                                                            <div className={styles.viewProject}>Visit Website ➜</div>
                                                            <p className={styles.projectPText}>
                                                                {item.description}
                                                            </p>
                                                        </Fade>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        : <a href={item.link} target="_blank" className={styles.noLinkStyles}>
                                            <div className={styles.imageContainer} >
                                                <div className={styles.project} style={{ backgroundImage: `url("${item.img}")` }}>
                                                    <div className={styles.projectText}>
                                                        <div className={styles.projectDate}>{item.date}</div>
                                                        <div className={styles.projectHeader}>{item.header}</div>
                                                        <div className={styles.projectUnder}>{item.underText}</div>
                                                        <Fade duration={500} distance={'1em'} up>
                                                            <div className={styles.viewProject}>Visit Website ➜</div>
                                                            <p className={styles.projectPText}>
                                                                {item.description}
                                                            </p>
                                                        </Fade>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                }
                            </Fade>
                        ))
                    }
                </div>

                <Fade up>
                    <div className={styles.projectButtonContainer}>
                        <Link to={"/projects"}><button href="#" className={`${styles.buttonLinkHome} ${styles.largerLink}`}>View All Projects</button></Link>
                    </div>
                </Fade>
            </div>
        </>
    );
}

export default HomeProjects;
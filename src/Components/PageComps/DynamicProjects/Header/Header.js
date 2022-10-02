import React from 'react';
import styles from './Header.module.css';
import Fade from 'react-reveal/Fade';

function Header({ project, views }) {
    // Header for dynamic projects
    return (
        <>
            {/* Project Header */}
            <div className={styles.projectsHeaderContainer}>
                <div className={styles.leftBox}>
                    <Fade up delay={400} distance={'1em'} duration={500}>
                        <div className={styles.h3}>Current Project</div>
                        <div className={styles.Projectsh1}>{project.name}</div>
                    </Fade>
                    <Fade up delay={500} distance={'2em'} duration={500}>
                        <div className={styles.h3}>My Role</div>
                        <div className={styles.roleList}>
                            {
                                project.roles.map((item, index) => (
                                    <li className={styles.normalText} key={index}>{item.role}</li>
                                ))
                            }
                        </div>
                    </Fade>
                    <Fade up delay={600} distance={'2em'} duration={500}>
                        <div className={styles.h3}>Client</div>
                        <div className={styles.normalText}>{project.client}</div>
                    </Fade>
                    <Fade up delay={700} distance={'2em'} duration={500}>
                        <div className={styles.h3}>Year</div>
                        <div className={styles.normalText}>{project.date}</div>
                    </Fade>
                </div>
                <Fade up delay={800} distance={'3em'} duration={500}>
                    <div className={styles.rightBox}>
                        {
                            project.text.map((item, index) => (
                                <div className={styles.text} key={index}>{item.p}</div>
                            ))
                        }
                    </div>
                </Fade>
            </div>
        </>
    );
}

export default Header;
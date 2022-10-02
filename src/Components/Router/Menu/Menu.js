import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
import { ContextFunction } from '../../../Context/ContextProvider';
import styles from './Menu.module.css';

function Menu() {
    const obj = ContextFunction();
    const { setCloseIcon } = obj;

    // Menu with links
    return (
        <>
            {/* List of links*/}
            <div className={styles.menuContainer}>
                <Fade delay={500}>
                    <div className={styles.h3}>Menu</div>
                </Fade>
                <ul className={styles.menu}>
                    <Fade left delay={400} distance={'2em'} duration={500}>
                        <li className={styles.menuLi}>
                            <i className={styles.menuI}>
                                <Link name={'home'} onClick={() => { setCloseIcon(false) }} className={styles.menuLink} to={""}>
                                    Home
                                </Link>
                            </i>
                        </li>
                    </Fade>
                    <Fade left delay={500} distance={'2em'} duration={500}>
                        <li className={styles.menuLi}>
                            <i className={styles.menuI}>
                                <Link name={'project'} onClick={() => setCloseIcon(false)} className={styles.menuLink} to={"/projects"}>Projects</Link>
                            </i>
                        </li>
                    </Fade>
                    <Fade left delay={600} distance={'2em'} duration={500}>
                        <li className={styles.menuLi}>
                            <i className={styles.menuI}>
                                <Link name={'about'} onClick={() => setCloseIcon(false)} className={styles.menuLink} to={"/about"}>About</Link>
                            </i>
                        </li>
                    </Fade>
                    <Fade left delay={700} distance={'2em'} duration={500}>
                        <li className={styles.menuLi}>
                            <i className={styles.menuI}>
                                <Link name={'contact'} onClick={() => setCloseIcon(false)} className={styles.menuLink} to={"/contact"}>Contact</Link>
                            </i>
                        </li>
                    </Fade>
                </ul>
            </div>

            {/* Footer */}
            <Fade up delay={700} duration={700}>
                <div className={styles.menuFooter}>
                    <div className={styles.menuFooterText}>© 2022 Tobey Hainge</div>
                </div>
            </Fade>
        </>
    );
}

export default Menu;
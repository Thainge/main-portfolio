import React from 'react';
import { ContextFunction } from '../../../Context/ContextProvider';
import { Link } from "react-router-dom";
import styles from './Footer.module.css';
import ProjectsData from './../../../Json/projects';

function Footer() {
    const obj = ContextFunction();
    const { setCloseIcon } = obj;

    // Set links to the last 7 items in projects array
    const FewerProjects = ProjectsData.slice(-7);

    // Footer for bottom of page
    return (
        <div className={styles.footer}>
            {/* Row 1 */}
            <div className={`${styles.footerRow} ${styles.footerRow1}`}>
                <div className={styles.footerh2}>Contact Information</div>
                <div className={styles.footertext}>Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away.</div>
                <div className={styles.emailDiv}><b>E: </b><a className={styles.LinkText} href="mailto:tobeyhainge@gmail.com" target="#">tobeyhainge@gmail.com</a></div>
                <div className={styles.normalText}><b>P:</b> +1-910-321-8215</div>
            </div>
            {/* Row 2 */}
            <div className={`${styles.footerRow} ${styles.footerRow2}`}>
                <div className={styles.footerh2}>Latest Projects</div>
                <div className={styles.footertext}>
                    <ul className={styles.projectUl}>
                        {
                            FewerProjects.map((item, index) => (
                                <li key={index} className={styles.projectLi}>
                                    <Link to={`/projects/${item.route}`} className={styles.LinkText} target={`#${index}`}>{item.name}</Link>
                                </li>
                            ))
                        }
                        <li className={styles.projectLi}>
                            <Link to={'/projects'} className={styles.LinkText} target={`#projects`}>All Projects</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Row 3 */}
            <div className={`${styles.footerRow} ${styles.footerRow3}`}>
                <div className={styles.footerh2}>Current Availability</div>
                <div className={styles.footertext}>Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away.</div>
            </div>
            {/* Row 4 */}
            <div className={`${styles.footerRow} ${styles.footerRow4}`}>
                <div className={styles.footerh2}>Follow me on</div>
                <div className={styles.footertext}>
                    <ul className={styles.followUl}>
                        <li className={styles.followLi}><a className={styles.LinkText} href="https://www.linkedin.com/in/tobey-hainge-0aa7b1199/" target="#A3">Linkedin</a></li>
                        <li className={styles.followLi}><a className={styles.LinkText} href="https://github.com/Thainge" target="#A4">Github</a></li>
                    </ul>
                </div>
            </div>

            {/* Menu Text and Icon */}

            <div className={styles.FootermenuHeaderDiv}>
                <img className={styles.FootercircleImage} src={require('./../../../assets/menuLastName.png')}></img>
                <Link onClick={() => setCloseIcon(false)} className={styles.FooterhiddenLink} to={"/"}>
                    <div className={styles.FooterheaderText}>
                        <div className={styles.FooterhiddenH2}>Tobey Hainge</div>
                        <div className={styles.FooterhiddenH4}>Web & UI Designer</div>
                    </div>
                </Link>
            </div>

        </div >
    );
}

export default Footer;
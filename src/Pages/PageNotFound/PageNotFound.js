import React from 'react';
import styles from './PageNotFound.module.css';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

function PageNotFound() {
    // Page not found page
    return (
        <div className={styles.NotFoundBody}>

            {/* Fixed Images */}
            <Fade delay={500}>
                <div className={styles.fixed}>
                    <div className={styles.fixedDesign}>Page Not Found Page Not Found Page Not Found Page Not Found Page Not Found Page Not Found</div>
                </div>
            </Fade>

            <div className={styles.NotFoundFlex}>
                <Fade delay={400}>
                    <div className={styles.headerFlex}>
                        Page Not Found
                    </div>
                    <div className={styles.headerText}>
                        We can't find the page you're looking for.
                        <br></br>
                        You can return to the previous page, visit our homepage, or contact us for assistance.
                    </div>
                </Fade>
                <Fade delay={400}>
                    <div className={styles.BackButtons}>
                        <Link className={styles.HomeLink} to={""}>Visit Homepage</Link>
                        <Link className={styles.ContactLink} to={"/contact"}>Contact Us</Link>
                    </div>
                </Fade>
            </div>

            <div className={styles.NotFoundFooter} />
        </div>
    );
}

export default PageNotFound;
import React, { useState, useEffect } from 'react';
import { ContextFunction } from '../../../../Context/ContextProvider';
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import styles from './HomeFirstSection.module.css';
import background from './../../../../assets/portrait.png';

function HomeFirstSection() {
    const obj = ContextFunction();
    const { projectsRef } = obj;

    // scroll to projects section
    const scrollToProjects = () => {
        window.scrollTo({
            top: projectsRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    // (elementHeight - scrollTop) / elementHeight

    // Sete value for scroll listener
    const [below, setBelow] = useState(true);
    let TriggeredScrollValue = 1000

    // Scroll listener, logs document position, if it goes below 100 it will trigger style changes
    const [mathValue, setMathValue] = useState(1)
    useEffect(() => {
        const handleScroll = event => {
            if (window.scrollY < TriggeredScrollValue) {
                setBelow(true)
                const Math = (1 - window.scrollY / 500)
                setMathValue(Math)
            } else {
                setBelow(false)
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* Fixed Images ${background}*/}
            <Fade delay={500}>
                <div className={styles.fixed}>
                    <div className={styles.fixedDesign}>designer</div>
                    <div className={styles.fixedPortrait} style={{ backgroundImage: `url('${background}')`, opacity: mathValue }}></div>
                </div>
            </Fade>

            {/* Header Section */}
            <div className={styles.headerContainer}>
                <div className={styles.textContainer}>
                    <Fade up delay={300} distance={'5em'}><div className={styles.h3Home}>Tobey Hainge</div></Fade>
                    <Fade up delay={700}><div className={styles.h1Home}>Website and user interface designer</div></Fade>
                    <Fade up delay={1000}><div className={styles.textHome}>Over the past 2 years, as an application developer and designer, I've worked with many clients to successfully help them reach their full potential and attract new customers.</div></Fade>

                    <Fade up delay={1300} distance={'5em'}>
                        <div>
                            <button className={styles.buttonLinkHome} onClick={scrollToProjects}>View Projects</button>
                            <b className={styles.grey}>or</b>
                            <Link to={"/about"}><button className={styles.buttonLinkHome}>Read about me</button></Link>
                        </div>
                    </Fade>
                </div>

                {/* Scroll button */}
                <Fade up delay={1600}>
                    <div className={styles.scrollContainer}>
                        <button className={styles.scrollButton} onClick={scrollToProjects}><div className={styles.circle} /></button>
                    </div>
                </Fade>
            </div>
        </>
    );
}

export default HomeFirstSection;
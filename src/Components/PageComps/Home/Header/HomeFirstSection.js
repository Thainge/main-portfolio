import React, { useState, useEffect } from 'react';
import { ContextFunction } from '../../../../Context/ContextProvider';
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import styles from './HomeFirstSection.module.css';
import background from './../../../../assets/portrait.png';
import ReactRotatingText from 'react-rotating-text';
import FlipNumbers from 'react-flip-numbers';
import ls from 'local-storage';

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

        setTimeout(() => {
            setShowText(true);
        }, [500])

        setTimeout(() => {
            let newerViews = 156;
            const newerLocalViews = ls.get('pageViewHome');
            if (newerLocalViews) {
                newerViews = newerLocalViews + 1;
                setViews(newerViews);
                ls.set('pageViewHome', newerViews);
            } else {
                newerViews = newerViews + 1;
                setViews(newerViews);
                ls.set('pageViewHome', newerViews);
            }
        }, 1300);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [showText, setShowText] = useState(false);

    let newViews = 156;
    const localViews = ls.get('pageViewHome');
    if (localViews) {
        newViews = localViews;
    }

    const [views, setViews] = useState(newViews);

    return (
        <div className={styles.container}>
            {/* Fixed Images ${background}*/}
            <Fade delay={500}>
                <div className={styles.fixed}>
                    <div className={styles.fixedDesign}>designer</div>
                    <div className={styles.fixedPortrait} style={{ backgroundImage: `url('${background}')`, opacity: views }}></div>
                </div>
            </Fade>
            {/* Header Section */}
            <div className={styles.headerContainer}>
                <div className={styles.textContainer}>
                    <div className={styles.flipText}>
                        <img className={styles.imageViews} src={require('../../../../assets/views.png')} />
                        <Fade delay={300}>
                            <FlipNumbers play
                                color="#000"
                                background="#fff"
                                width={20}
                                height={20}
                                numbers={`${newViews}`}
                            />
                        </Fade>
                    </div>
                    <Fade up delay={300} distance={'5em'}>
                        <div className={styles.h3Home}>Tobey Hainge</div>
                    </Fade>
                    <div className={styles.h1Home}>
                        {
                            showText ? <Fade distance={'1em'} up delay={100}><ReactRotatingText items={['Fullstack Developer', 'Website and user interface designer']} /></Fade> : <></>
                        }
                    </div>
                    <Fade up delay={900}><div className={styles.textHome}>Over the past 3 years as a fullstack developer, I've worked with many clients to successfully help them reach their full potential and attract new customers.</div></Fade>
                    <Fade up delay={1300} distance={'3em'}>
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
        </div>
    );
}

export default HomeFirstSection;
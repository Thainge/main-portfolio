import React from 'react';
import styles from './About.module.css';
import AboutHeader from '../../Components/PageComps/About/Header/AboutHeader';
import SlideShow from './../../Components/PageComps/About/Slideshow/SlideShow';
import ServicesTools from '../../Components/PageComps/About/ServicesTools/ServicesTools';
import Clients from '../../Components/PageComps/About/Clients/Clients';
import Experience from '../../Components/PageComps/About/Experience/Experience';
import NeedDesigner from '../../Components/Router/NeedDesigner/NeedDesigner';
import AboutData from './../../Json/aboutData';

function About() {

    // All brand images
    const brands = [
        {
            src: require('./../../assets/brand.png'),
        },
    ];

    // All slideshow images
    const images = [
        {
            original: require('./../../assets/about0.png'),
        },
        {
            original: require('./../../assets/about1.png'),
        },
        {
            original: require('./../../assets/about2.png'),
        },
    ];

    // About Page
    return (
        <>
            <div className={styles.AboutContainer}>
                <AboutHeader />
                <SlideShow images={images} />
                <ServicesTools JsonData={AboutData} />
                <Experience JsonData={AboutData} />
                {/* <Clients brands={brands} /> */}
            </div>
            <NeedDesigner />
        </>
    );
}

export default About;
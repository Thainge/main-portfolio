import React from 'react';
import styles from './Home.module.css';
import HomeFirstSection from '../../Components/PageComps/Home/Header/HomeFirstSection';
import HomeProjects from '../../Components/PageComps/Home/Projects/HomeProjects';
import NeedDesigner from '../../Components/Router/NeedDesigner/NeedDesigner';
import ProjectsData from './../../Json/projects';

function Home() {
    // Home Page
    return (
        <>
            <div className={styles.homeContainer}>
                <HomeFirstSection />
                <HomeProjects ProjectsData={ProjectsData} />
            </div>
            <NeedDesigner />
        </>
    );
}

export default Home;
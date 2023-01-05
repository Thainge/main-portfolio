import React, { useEffect, useState } from 'react';
import styles from './DynamicProjects.module.css';
import Header from '../../Components/PageComps/DynamicProjects/Header/Header'
import SlideShow from '../../Components/PageComps/DynamicProjects/Slideshow/Slideshow';
import Footer from '../../Components/PageComps/DynamicProjects/Footer/footer'
import Comments from '../../Components/Comments/comments';

function DynamicProjects({ project, currentIndex, ProjectsData }) {
    // Get Next index
    const filteredProject = ProjectsData.slice((currentIndex + 1), (currentIndex + 2))
    // Return current index or 1 if max reached
    let NextProject = (filteredProject[0] ? filteredProject[0] : ProjectsData.slice(0, 1)[0])


    // Get database page views for current page
    const [databasePageCount, setDatabasePageCount] = useState(0);

    // Displayed page view
    const [views, setViews] = useState(0);

    useEffect(() => {
        const AddView = databasePageCount + 1
        setDatabasePageCount(AddView);
        setViews(AddView);
    }, [])

    return (
        <>
            <div className={styles.SelectedProjectBox}>
                <Header project={project} views={views} />
                <SlideShow project={project} />
                <Footer project={NextProject} />
                <Comments />
            </div>
        </>
    )
}

export default DynamicProjects;
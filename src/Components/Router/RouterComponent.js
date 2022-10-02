import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router";
import { ContextFunction } from '../../Context/ContextProvider';
import FixedScroller from './FixedScroller/FixedScroller';
import Loader from './Loader/Loader';
import Menu from './Menu/Menu';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from '../../Pages/Home/Home';
import Projects from '../../Pages/Projects/Projects';
import DynamicProjects from './../../Pages/DynamicProjects/DynamicProjects';
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact/Contact';
import PageNotFound from '../../Pages/PageNotFound/PageNotFound';
import styles from './RouterComponent.module.css';
import ProjectsData from './../../Json/projects';

// Scroll to top on route change for all children
export const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return <>{props.children}</>
};

function RouterComponent() {
    const obj = ContextFunction();
    const { closeIcon } = obj;

    // Scroll to top on page load
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    // Set loading state to true initially
    const [loading, setLoading] = useState(true);

    // Every time location changes (route), async function to show loading page
    let location = useLocation();

    React.useEffect(() => {
        // display loading page
        setLoading(true);
        const loadData = async () => {
            // Wait for two second
            await new Promise((r) => setTimeout(r, 1600));
            // hide loading page
            setLoading(false);
        };
        loadData();
    }, [location]);

    return (
        <>
            {
                // Display loader or all other content
                loading ? <Loader /> :
                    // Display menu or all other content
                    closeIcon ?
                        <div className={styles.menuBody}>
                            <div className={styles.menuImageContainer}>
                                <Header />
                                <Menu />
                            </div>
                        </div>
                        :
                        <>
                            <div className={styles.sldingRoutes}></div>
                            <Header />
                            {/* All possible routes */}
                            <ScrollToTop>
                                <Routes>
                                    <Route path="" element={<Home />} />
                                    <Route path="/projects" element={<Projects />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/contact" element={<Contact />} />
                                    <Route path="*" element={<PageNotFound />} />
                                    {
                                        // All dynamic project routes
                                        ProjectsData.map((item, index) => (
                                            <Route path={`/projects/${item.route}`} exact key={index} element={<DynamicProjects project={item} currentIndex={index} ProjectsData={ProjectsData} />} />
                                        ))
                                    }
                                </Routes >
                                {/* Fixed Scroller + email at bottom */}
                                <FixedScroller />
                                <Footer />
                            </ScrollToTop>
                        </>

            }

        </>
    );
}

export default RouterComponent;
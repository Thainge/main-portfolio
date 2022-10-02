import React from 'react';
import ProjectsData from './../../Json/projects';
import SpecialHeader from '../../Components/Router/Header/SpecialHeader/Special';
import NeedDesigner from '../../Components/Router/NeedDesigner/NeedDesigner';
import Header from './../../Components/PageComps/Projects/Header/Header';
import Sortbar from './../../Components/PageComps/Projects/Sortbar/Sortbar';
import AllProjects from './../../Components/PageComps/Projects/Projects/AllProjects';
import Footer from './../../Components/PageComps/Projects/Footer/Footer';

function Projects() {
    // All Projects search tab
    return (
        <>
            <SpecialHeader />
            <Header />
            <Sortbar ProjectsData={ProjectsData} />
            <AllProjects ProjectsData={ProjectsData} />
            <Footer ProjectsData={ProjectsData} />
            <NeedDesigner />
        </ >
    );
}

export default Projects;
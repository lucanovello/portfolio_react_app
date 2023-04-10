import React from 'react';
import projectsStyle from './ProjectsPage.module.css';

function ProjectsPage({ ProjectsPageRef }) {
    return (
        <div className={projectsStyle.projectsContainer} ref={ProjectsPageRef}>
            <h2 className={projectsStyle.projectsMainTitle}>Projects</h2>
            <p className={projectsStyle.projectsMainDesc}>This is the project section.</p>
        </div>
    );
}

export default ProjectsPage;

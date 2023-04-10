import { useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import appStyle from './App.module.css';
import Logo from './components/logo/Logo';
import SideBar from './components/sideBar/SideBar';
import TopNavbar from './components/topNavbar/TopNavbar';
import AboutPage from './pages/aboutPage/AboutPage';
import ProjectsPage from './pages/projectsPage/ProjectsPage';
import ContactPage from './pages/contactPage/ContactPage';
import Header from './components/header/Header';
import Background from './components/background/Background';

function App() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [mousePosition, setMousePosition] = useState([-10, 10, 5]);
    const HeaderRef = useRef();
    const AboutPageRef = useRef();
    const ProjectsPageRef = useRef();
    const ContactPageRef = useRef();

    return (
        <div className={isSideBarOpen ? appStyle.appContainerSide : appStyle.appContainer}>
            <Logo setIsSideBarOpen={setIsSideBarOpen} isSideBarOpen={isSideBarOpen} />
            <TopNavbar />
            {/* <SideBar isSideBarOpen={isSideBarOpen} /> */}
            <Header HeaderRef={HeaderRef} />
            {/* <AboutPage AboutPageRef={AboutPageRef} /> */}
            {/* <ProjectsPage ProjectsPageRef={ProjectsPageRef} /> */}
            {/* <ContactPage ContactPageRef={ContactPageRef} />  */}
            {/* <Routes>
                <Route path="/#about" element={<AboutPage isSideBarOpen={isSideBarOpen} />} />
                <Route path="/#projects" element={<ProjectsPage isSideBarOpen={isSideBarOpen} />} />
                <Route path="/#contact" element={<ContactPage isSideBarOpen={isSideBarOpen} />} />
            </Routes> */}
            <Background />
        </div>
    );
}

export default App;

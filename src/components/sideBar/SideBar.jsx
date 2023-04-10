import React from 'react';
import { Link } from 'react-router-dom';
import sideBarStyle from './SideBar.module.css';
import { FaGithub, FaCodepen } from 'react-icons/fa';
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiWebgl,
    SiNodedotjs,
    SiTypescript,
    SiExpress,
    SiMongodb,
    SiCanva,
    SiFigma,
    SiAdobecreativecloud,
    SiGit,
} from 'react-icons/si';
import { IoServer } from 'react-icons/io5';

function SideBar({ isSideBarOpen }) {
    return (
        <aside
            className={
                isSideBarOpen
                    ? sideBarStyle.sideBarContainerOpen
                    : sideBarStyle.sideBarContainerClose
            }
        >
            {/* BIO ------------------------------------------------------------------*/}
            <div className={`${sideBarStyle.sideBarHeader} ${sideBarStyle.sideBarHeaderBio}`}>
                <h1 className={sideBarStyle.sideBarHeaderName}>
                    Luca<span className={sideBarStyle.sideBarHeaderNameSpan}>Novello</span>
                </h1>
                <p className={sideBarStyle.sideBarHeaderText}>Full Stack Developer</p>
                <p className={sideBarStyle.sideBarHeaderText}>Front End Designer</p>{' '}
            </div>
            {/* SKILLS -----------------------------------------------------------------------------*/}
            <div className={`${sideBarStyle.sideBarHeader} ${sideBarStyle.sideBarHeaderSkills}`}>
                <h2 className={sideBarStyle.sideBarMenuTitle}>Front End</h2>
                <ul className={sideBarStyle.sideBarMenuWrapper}>
                    <li className={sideBarStyle.sideBarMenuItem}>
                        <SiHtml5
                            className={`${sideBarStyle.sideBarMenuItemIcon} ${sideBarStyle.html}`}
                        />{' '}
                        HTML
                    </li>
                    <li className={sideBarStyle.sideBarMenuItem}>
                        <SiCss3
                            className={`${sideBarStyle.sideBarMenuItemIcon} ${sideBarStyle.css}`}
                        />
                        CSS
                    </li>
                    <li className={sideBarStyle.sideBarMenuItem}>
                        <SiJavascript
                            className={`${sideBarStyle.sideBarMenuItemIcon} ${sideBarStyle.js}`}
                        />
                        JavaScript
                    </li>
                    <li className={sideBarStyle.sideBarMenuItem}>
                        <SiTypescript
                            className={`${sideBarStyle.sideBarMenuItemIcon} ${sideBarStyle.ts}`}
                        />
                        TypeScript
                    </li>
                    <li className={sideBarStyle.sideBarMenuItem}>
                        <SiReact
                            className={`${sideBarStyle.sideBarMenuItemIcon} ${sideBarStyle.react}`}
                        />
                        React
                    </li>
                </ul>
            </div>
            {/* INTERESTS -----------------------------------------------------------------------------*/}
            <div className={`${sideBarStyle.sideBarHeader} ${sideBarStyle.sideBarHeaderInterests}`}>
                <h2 className={sideBarStyle.sideBarMenuTitle}>Back End</h2>
                <ul className={sideBarStyle.sideBarMenuWrapper}>
                    <li className={sideBarStyle.sideBarMenuItem}>
                        <SiNodedotjs
                            className={`${sideBarStyle.sideBarMenuItemIcon} ${sideBarStyle.node}`}
                        />
                        Nodejs
                    </li>
                    <li className={sideBarStyle.sideBarMenuItem}>
                        <SiExpress
                            className={`${sideBarStyle.sideBarMenuItemIcon} ${sideBarStyle.express}`}
                        />
                        Express
                    </li>
                    <li className={sideBarStyle.sideBarMenuItem}>
                        <SiMongodb
                            className={`${sideBarStyle.sideBarMenuItemIcon} ${sideBarStyle.mongo}`}
                        />
                        MongoDB
                    </li>
                    <li className={sideBarStyle.sideBarMenuItem}>
                        <IoServer
                            className={`${sideBarStyle.sideBarMenuItemIcon} ${sideBarStyle.rest}`}
                        />
                        RESTful APIs
                    </li>
                </ul>
            </div>
            {/* SKILLS -----------------------------------------------------------------------------*/}
            <div className={`${sideBarStyle.sideBarHeader} ${sideBarStyle.sideBarHeaderSkills}`}>
                <h2 className={sideBarStyle.sideBarMenuTitle}>Design</h2>
                <ul className={sideBarStyle.sideBarMenuWrapper}>
                    <li className={sideBarStyle.sideBarMenuItem}>
                        <SiCanva
                            className={`${sideBarStyle.sideBarMenuItemIcon} ${sideBarStyle.canva}`}
                        />
                        Canva
                    </li>
                    <li className={sideBarStyle.sideBarMenuItem}>
                        <SiFigma
                            className={`${sideBarStyle.sideBarMenuItemIcon} ${sideBarStyle.figma}`}
                        />
                        Figma
                    </li>
                    <li className={sideBarStyle.sideBarMenuItem}>
                        <SiAdobecreativecloud
                            className={`${sideBarStyle.sideBarMenuItemIcon} ${sideBarStyle.adobe}`}
                        />
                        Adobe CC
                    </li>
                    <li className={sideBarStyle.sideBarMenuItem}>
                        <SiGit
                            className={`${sideBarStyle.sideBarMenuItemIcon} ${sideBarStyle.git}`}
                        />
                        Git
                    </li>
                </ul>
            </div>
            {/* Links -----------------------------------------------------------------------------*/}
            <div className={`${sideBarStyle.sideBarHeader} ${sideBarStyle.sideBarHeaderLinks}`}>
                <h2 className={sideBarStyle.sideBarMenuTitle}>Links</h2>
                <ul className={sideBarStyle.sideBarMenuWrapper}>
                    <li className={sideBarStyle.sideBarMenuItem}>
                        <Link
                            className={sideBarStyle.sideBarMenuItemLink}
                            to={'https://www.linkedin.com/in/novello-luca/'}
                            target="_blank"
                        >
                            <svg className={sideBarStyle.linkedIn} viewBox="0 0 72 72">
                                <path
                                    d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
                                    className="linkedin-blue"
                                    fill="#007EBB"
                                />
                                <path
                                    d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                                    className="linkedin-white"
                                    fill="#fff"
                                />
                            </svg>
                            LinkedIn
                        </Link>
                    </li>
                    <li className={sideBarStyle.sideBarMenuItem}>
                        <Link
                            className={sideBarStyle.sideBarMenuItemLink}
                            to={'https://github.com/lucanovello'}
                            target="_blank"
                        >
                            <FaGithub className={sideBarStyle.gitHub} />
                            Github
                        </Link>
                    </li>
                    <li className={sideBarStyle.sideBarMenuItem}>
                        <Link
                            className={sideBarStyle.sideBarMenuItemLink}
                            to={'https://codepen.io/LucaNovello'}
                            target="_blank"
                        >
                            <FaCodepen className={sideBarStyle.codePen} />
                            CodePen
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default SideBar;

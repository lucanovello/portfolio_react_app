import React from 'react';
import { Link } from 'react-router-dom';
import aboutStyle from './AboutPage.module.css';
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

function AboutPage({ AboutPageRef }) {
    return (
        <section className={aboutStyle.aboutContainer} ref={AboutPageRef}>
            <h2 className={aboutStyle.aboutMainTitle}>{'About Me'}</h2>
            <p className={aboutStyle.aboutMainDesc}>
                {`As a Full Stack Developer and Front End Designer with over 6 years of experience
                in web development, programming, and UX/UI design, I am passionate about creating
                exceptional user experiences and solving problems through clean, elegant code. With
                a solid foundation in tools such as React, Node.js, Express, Next.js, MongoDB,
                JavaScript, CSS, Git, and Adobe Creative Suite, I am well-equipped to tackle a wide
                range of web development projects. I am constantly seeking opportunities to learn
                and grow as a developer, and I thrive in collaborative environments where I can work
                alongside other talented programmers.`}
            </p>

            <div className={aboutStyle.aboutSectionsContainer}>
                {/* Frontend -----------------------------------------------------------------------------*/}
                <div
                    className={`${aboutStyle.aboutSectionWrapper} ${aboutStyle.aboutSectionFrontend}`}
                >
                    <h2 className={aboutStyle.aboutMenuTitle}>{'Front End'}</h2>
                    <ul className={aboutStyle.aboutMenuWrapper}>
                        <li className={aboutStyle.aboutMenuItem}>
                            <SiReact
                                className={`${aboutStyle.aboutMenuItemIcon} ${aboutStyle.react}`}
                            />
                            {'React'}
                        </li>
                        <li className={aboutStyle.aboutMenuItem}>
                            <SiJavascript
                                className={`${aboutStyle.aboutMenuItemIcon} ${aboutStyle.js}`}
                            />
                            {'JavaScript'}
                        </li>
                        <li className={aboutStyle.aboutMenuItem}>
                            <SiTypescript
                                className={`${aboutStyle.aboutMenuItemIcon} ${aboutStyle.ts}`}
                            />
                            {'TypeScript'}
                        </li>
                        <li className={aboutStyle.aboutMenuItem}>
                            <SiHtml5
                                className={`${aboutStyle.aboutMenuItemIcon} ${aboutStyle.html}`}
                            />{' '}
                            {'HTML'}
                        </li>
                        <li className={aboutStyle.aboutMenuItem}>
                            <SiCss3
                                className={`${aboutStyle.aboutMenuItemIcon} ${aboutStyle.css}`}
                            />
                            {'CSS'}
                        </li>
                    </ul>
                </div>
                {/* Backend -----------------------------------------------------------------------------*/}
                <div
                    className={`${aboutStyle.aboutSectionWrapper} ${aboutStyle.aboutSectionBackend}`}
                >
                    <h2 className={aboutStyle.aboutMenuTitle}>{'Back End'}</h2>
                    <ul className={aboutStyle.aboutMenuWrapper}>
                        <li className={aboutStyle.aboutMenuItem}>
                            <SiNodedotjs
                                className={`${aboutStyle.aboutMenuItemIcon} ${aboutStyle.node}`}
                            />
                            {'Nodejs'}
                        </li>
                        <li className={aboutStyle.aboutMenuItem}>
                            <SiExpress
                                className={`${aboutStyle.aboutMenuItemIcon} ${aboutStyle.express}`}
                            />
                            {'Express'}
                        </li>
                        <li className={aboutStyle.aboutMenuItem}>
                            <SiMongodb
                                className={`${aboutStyle.aboutMenuItemIcon} ${aboutStyle.mongo}`}
                            />
                            {'MongoDB'}
                        </li>
                        <li className={aboutStyle.aboutMenuItem}>
                            <IoServer
                                className={`${aboutStyle.aboutMenuItemIcon} ${aboutStyle.rest}`}
                            />
                            {'RESTful APIs'}
                        </li>
                    </ul>
                </div>
                {/* design & development -----------------------------------------------------------------------------*/}
                <div
                    className={`${aboutStyle.aboutSectionWrapper} ${aboutStyle.aboutSectionDesign}`}
                >
                    <h2 className={aboutStyle.aboutMenuTitle}>{'Design & Dev Tools'}</h2>
                    <ul className={aboutStyle.aboutMenuWrapper}>
                        <li className={aboutStyle.aboutMenuItem}>
                            <SiAdobecreativecloud
                                className={`${aboutStyle.aboutMenuItemIcon} ${aboutStyle.adobe}`}
                            />
                            {'Adobe CC'}
                        </li>
                        <li className={aboutStyle.aboutMenuItem}>
                            <SiCanva
                                className={`${aboutStyle.aboutMenuItemIcon} ${aboutStyle.canva}`}
                            />
                            {'Canva'}
                        </li>
                        <li className={aboutStyle.aboutMenuItem}>
                            <SiFigma
                                className={`${aboutStyle.aboutMenuItemIcon} ${aboutStyle.figma}`}
                            />
                            {'Figma'}
                        </li>
                        <li className={aboutStyle.aboutMenuItem}>
                            <SiGit
                                className={`${aboutStyle.aboutMenuItemIcon} ${aboutStyle.git}`}
                            />
                            {'Git'}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default AboutPage;

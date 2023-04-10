import React, { useState } from 'react';
import headerStyle from './Header.module.css';

function Header({ HeaderRef }) {
    return (
        <div className={headerStyle.headerContainer} ref={HeaderRef}>
            <div className={headerStyle.headerTextWrapper}>
                <p className={headerStyle.headerTextBody}>{'Hey, my name is'}</p>
                <h1 className={headerStyle.headerTextTitle}>
                    {'Luca'}
                    <span className={headerStyle.headerTextTitleSpan}>{'Novello'}</span>
                </h1>
                {/* <h2 className={headerStyle.headerTextBody}>Full Stack Developer</h2>
                <h2 className={headerStyle.headerTextBody}>Front End Designer</h2> */}
                <p className={headerStyle.headerTextBody}>
                    {"I'm a "}
                    <span className={headerStyle.headerTextBodySpan}>{'Full Stack Developer'}</span>
                    {' and '}
                    <span className={headerStyle.headerTextBodySpan}>{'Front End Designer'}</span>
                    {
                        ' specializing in seamless and user-friendly web experiences. My focus is in developing responsive and beautiful websites that drive business growth and customer engagement.'
                    }
                </p>
                <button className={headerStyle.headerTextBtn} type="button">
                    View My Work
                </button>
            </div>
        </div>
    );
}

export default Header;

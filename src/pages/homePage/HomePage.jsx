import React from 'react';
import Header from '../../components/header/Header';
import homeStyle from './HomePage.module.css';

function HomePage({ isSideBarOpen }) {
    return (
        <div className={homeStyle.homeContainer}>
            <Header isSideBarOpen={isSideBarOpen} />
        </div>
    );
}

export default HomePage;

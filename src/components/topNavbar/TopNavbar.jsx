import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import topNavStyle from './TopNavbar.module.css';

function TopNavbar() {
    const [topNavClass, setTopNavClass] = useState(
        window.scrollY < 40 ? topNavStyle.topNavContainer : topNavStyle.topNavContainerScroll
    );

    useEffect(() => {
        setTopNavClass(
            window.scrollY < 40 ? topNavStyle.topNavContainer : topNavStyle.topNavContainerScroll
        );
    }, []);

    window.addEventListener('scroll', () =>
        window.scrollY < 40
            ? setTopNavClass(topNavStyle.topNavContainer)
            : setTopNavClass(topNavStyle.topNavContainerScroll)
    );

    return (
        <nav className={topNavClass}>
            <ul className={topNavStyle.topNavMenuWrapper}>
                <a className={topNavStyle.topNavMenuItem} href={'#home'}>
                    <li className={topNavStyle.topNavMenuItemLink}>{'Home'}</li>
                </a>
                <a className={topNavStyle.topNavMenuItem} href={'#about'}>
                    <li className={topNavStyle.topNavMenuItemLink}>{'About'}</li>
                </a>
                <a className={topNavStyle.topNavMenuItem} href={'#projects'}>
                    <li className={topNavStyle.topNavMenuItemLink}>{'Projects'}</li>
                </a>
                <a className={topNavStyle.topNavMenuItem} href={'#contact'}>
                    <li className={topNavStyle.topNavMenuItemLink}>{'Contact'}</li>
                </a>
            </ul>
        </nav>
    );
}

export default TopNavbar;

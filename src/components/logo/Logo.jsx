import { Link } from 'react-router-dom';
import logoStyle from './Logo.module.css';

function Logo({ setIsSideBarOpen, isSideBarOpen }) {
    return (
        <Link className={logoStyle.logoWrapper} to={'/'}>
            <h1 className={logoStyle.logoIconText}>
                {'Luca'}
                <span className={logoStyle.logoIconTextSpan}>{'Novello'}</span>
            </h1>
        </Link>
    );
}

export default Logo;

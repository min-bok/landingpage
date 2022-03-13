import { useState } from 'react';
import style from '../CSS/header.module.css'

function Header() {
    const [isShow, setNav] = useState(false);

    const toggleNav = () => {
        setNav(isShow => !isShow);
    } 

    return(
        <section id={`${style.header}`}>
            <div className={`${style.logo}`}></div>
            <div onClick={toggleNav} className={`${style.hamburger}`}></div>
            <div className={`${style.menu}`}>
                <div className={`${style.wrap}`}>
                    <p className={`${style.home}`}>Home</p>
                    <p className={`${style.about}`}>About</p>
                    <p className={`${style.support}`}>Support</p>
                </div>
                <button className={`${style.download}`}>Download</button>
            </div>

            <div className={isShow ? `${style.show}` : `${style.hide}`}>
                <div onClick={toggleNav} className={`${style.arrow}`}></div>
                <ul className={`${style.list}`}>
                    <li className={`${style.li}`}>Home</li>
                    <li className={`${style.li}`}>About</li>
                    <li className={`${style.li}`}>Support</li>
                    <button className={`${style.btn}`}>Download</button>
                </ul>
            </div>
        </section>
    )
}

export default Header;
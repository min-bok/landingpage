import { useState } from 'react';
import style from '../CSS/Menu.module.css'

function Menu() {
    const [isShow, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(isShow => !isShow);
    } 

    return(
        <section id={`${style.menu}`}>
            <div className={isShow ? `${style.show}` : `${style.hide}`}>
                <div className={`${style.arrow}`}></div>
                <ul className={`${style.list}`}>
                    <li className={`${style.home}`}>Home</li>
                    <li className={`${style.about}`}>About</li>
                    <li className={`${style.support}`}>Support</li>
                    <button className={`${style.btn}`}>Download</button>
                </ul>
            </div>
        </section>
    )
}

export default Menu;
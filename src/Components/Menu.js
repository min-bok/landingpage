import style from '../CSS/Menu.module.css'

function Menu() {
    return(
        <section id={`${style.menu}`}>
            <div className={`${style.wrap}`}>
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
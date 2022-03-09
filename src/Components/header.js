import style from '../CSS/header.module.css'

function Header() {
    return(
        <section id={`${style.header}`}>
            <div className={`${style.logo}`}></div>
            <div className={`${style.menu}`}>
                <p className={`${style.home}`}></p>
                <p className={`${style.about}`}></p>
                <p className={`${style.support}`}></p>
                <button className={`${style.download}`}></button>
            </div>
        </section>
    )
}

export default Header;
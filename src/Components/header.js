import style from '../CSS/header.module.css'

function Header() {
    return(
        <section id={`${style.header}`}>
            <div className={`${style.logo}`}></div>
            <div className={`${style.menu}`}>
                <p className={`${style.home}`}>Home</p>
                <p className={`${style.about}`}>About</p>
                <p className={`${style.support}`}>Support</p>
                <button className={`${style.download}`}>Download</button>
            </div>
        </section>
    )
}

export default Header;
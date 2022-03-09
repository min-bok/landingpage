import style from '../CSS/header.module.css'

function Header() {
    return(
        <section id={`${style.header}`}>
            <div className={`${style.logo}`}></div>
            <div className={`${style.menu}`}>
                <div className={`${style.wrap}`}>
                    <p className={`${style.home}`}>Home</p>
                    <p className={`${style.about}`}>About</p>
                    <p className={`${style.support}`}>Support</p>
                </div>
                <button className={`${style.download}`}>Download</button>
            </div>
        </section>
    )
}

export default Header;
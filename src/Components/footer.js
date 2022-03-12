import style from '../CSS/footer.module.css'

function Footer() {
    return(
        <section id={`${style.footer}`}>
            <div className={`${style.logo}`}></div>
            <div className={`${style.wrap}`}>
                <div className={`${style.blog}`}></div>
                <div className={`${style.insta}`}></div>
                <div className={`${style.facebook}`}></div>
                <div className={`${style.youtube}`}></div>
            </div>
            <ul className={`${style.moblie}`}>
                <li className={`${style.menu}`}>About</li>
                <li className={`${style.menu}`}>Blog</li>
                <li className={`${style.menu}`}>Support</li>
                <li className={`${style.menu}`}>Terms of Use</li>
            </ul>
        </section>
    )
}

export default Footer;
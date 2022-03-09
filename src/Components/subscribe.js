import style from '../CSS/subscribe.module.css'

function Subscribe() {
    return(
        <section id={`${style.subscribe}`}>
            <div className={`${style.textWrap}`}>
                <p className={`${style.title}`}>Subscribe to our Blog post</p>
                <p className={`${style.text}`}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text
                </p>
            </div>
            <div className={`${style.searchBar}`}>
                <div className={`${style.icon}`}></div>
                <input type="text" className={`${style.input}`} placeholder='Enter your e-mail address'/>
                <button className={`${style.btn}`}>Subscribe</button>
            </div>
        </section>
    )
}

export default Subscribe;
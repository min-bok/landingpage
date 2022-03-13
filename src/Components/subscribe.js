import style from '../CSS/subscribe.module.css'

function Subscribe() {
    return(
        // <section id={`${style.subscribe}`}>
        <section id={`${style.modal}`}>
            <div className={`${style.subWrap}`}>
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
            </div>

            <div className={`${style.modalWrap}`}>
                <div className={`${style.modalCont}`}>
                    <div className={`${style.modalImg}`}></div>
                    <div className={`${style.modalTextWrap}`}>
                        <p className={`${style.modalTitle}`}>Thank you!</p>
                        <p className={`${style.modalText}`}>
                            <span className={`${style.mobile}`}>Lorem Ipsum is simply dummy</span>
                            text of the printing industry. 
                        </p>
                        <button className={`${style.modalBtn}`}>OK! I Love HODU</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe;
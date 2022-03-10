import style from '../CSS/first.module.css'

function First() {
    return(
        <section id={`${style.first}`}>
            <div className={`${style.wrap}`}>
                <div className={`${style.textWrap}`}>
                    <p className={`${style.text}`}>
                        <span className={`${style.textWeb}`}>Lorem Ipsum is simply</span>
                        <span className={`${style.textMobile}`}>dummy text</span> of the printing and
                    </p>
                    <p className={`${style.detailText}`}>
                    <span className={`${style.webText}`}>
                    Lorem Ipsum is simply dummy text of the printing and<br/>
                    typesetting industry.<br/>
                    Lorem Ipsum has been the industry's standard dummy text<br/>
                    ever since the 1500s, when an unknown
                    </span>
                    <span className={`${style.mobileText}`}>
                    Lorem Ipsum is simply dummy text<br/>
                    of the printing and typesetting industry.<br/>
                    Lorem Ipsum has been the industry's<br/>
                    standard dummy text ever since the 1500s,<br/>
                    when an unknown
                    </span>
                    </p>
                    <button className={`${style.btn}`}>Download</button>
                </div>
                <div className={`${style.img}`}></div>
            </div>
        </section>
    )
}

export default First; 
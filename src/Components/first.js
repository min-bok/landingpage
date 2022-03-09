import style from '../CSS/first.module.css'

function First() {
    return(
        <section id={`${style.first}`}>
            <div className={`${style.wrap}`}>
                <div className={`${style.textWrap}`}>
                    <pre className={`${style.text}`}></pre>
                    <pre className={`${style.detailText}`}></pre>
                    <button className={`${style.btn}`}></button>
                </div>
                <div className={`${style.img}`}></div>
            </div>
        </section>
    )
}

export default First; 
import style from '../CSS/second.module.css'

function Second() {
    return(
        <>
            <section id={`${style.second}`}>
                <div className={`${style.one}`}>
                    <div className={`${style.oneImg}`}></div>
                    <div className={`${style.oneWrap}`}> 
                        <p className={`${style.text}`}>
                            Lorem Ipsum is simply<br/>
                            dummy text of the printing and dummy text
                        </p>
                        <p className={`${style.textDetail}`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting<br/>
                        industry. 
                        </p>
                    </div>
                </div>
                <div className={`${style.two}`}></div>
                <div className={`${style.three}`}></div>
                <div className={`${style.four}`}></div>    
            </section>
        </>
    ) 
}

export default Second;
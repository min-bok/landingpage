import style from '../CSS/three.module.css'

function Three() {
    return(
        <section id={`${style.three}`}>
            <div className={`${style.topBtn}`}></div>
            <div className={`${style.wrap}`}>
                <div className={`${style.threeImg}`}></div>
                <div className={`${style.imgCover}`}></div>
            </div>
        </section>
    )
}

export default Three;
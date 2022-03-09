import style from '../CSS/three.module.css'

function Three() {
    return(
        <section id={`${style.three}`}>
            <div className={`${style.threeImg}`}></div>
            <div className={`${style.imgCover}`}></div>
        </section>
    )
}

export default Three;
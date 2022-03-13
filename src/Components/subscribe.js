import { useState } from 'react';
import style from '../CSS/subscribe.module.css'

function Subscribe() {
    const [isShow, setModal] = useState(false);

    const showModal = () => {
        setModal(isShow => !isShow);
    }

    return(
        <section id={isShow ? `${style.modal}` : `${style.subscribe}`}>
            <div className={isShow ? `${style.hideSub}` : `${style.showSub}`}>
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
                    <button onClick={showModal} className={`${style.btn}`}>Subscribe</button>
                </div>
            </div>

            <div className={isShow ? `${style.showModal}` : `${style.hideModal}`}>
                <div className={`${style.modalCont}`}>
                    <div className={`${style.modalImg}`}></div>
                    <div className={`${style.modalTextWrap}`}>
                        <p className={`${style.modalTitle}`}>Thank you!</p>
                        <p className={`${style.modalText}`}>
                            <span className={`${style.mobile}`}>Lorem Ipsum is simply dummy</span>
                            text of the printing industry. 
                        </p>
                        <button onClick={showModal} className={`${style.modalBtn}`}>OK! I Love HODU</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe;
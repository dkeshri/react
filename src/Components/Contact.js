import React from 'react'
import SocialMediaIcons from './Common/SocialMediaIcons'
import style from '../assets/css/Contact.module.css'
const Contact = () => {
    return (
        <div className={` ${style.Contact_container}`}>
            <div className={style.Contact}>
                <div className={style.Contact_heading}>
                    <h1 className={style.h1}>Contact</h1>
                    <span className={style.span}>Info</span>
                </div>
                <div className={style.row}>
                    <div className={style.col_left}>
                        <h5>Name :</h5>
                    </div>
                    <div className={style.col_right}>
                        <span>Deepak keshri</span>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col_left}>
                        <h5>EmailId :</h5>
                    </div>
                    <div className={style.col_right}>
                        <span>dkeshridev@gmail.com</span>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col_left}>
                        <h5>Portfolio :</h5>
                    </div>
                    <div className={style.col_right}>
                        <a target="_blank" href="https://dkeshri.github.io/Portfolio/">https://dkeshri.github.io/Portfolio/</a>
                    </div>
                </div>
                <section className={`social-media ${style.socialMedia}`}>
                    <SocialMediaIcons color="grey" />
                </section>
            </div>
            <div className={style.Contact_Image}>
                <img
                    className={style.img}
                    src={require('../assets/img/profile/Dummy.jpg')} />
            </div>
        </div>
    )
}

export default Contact

import React from 'react'
import style from '../assets/css/AboutUs.module.css'
import SocialMediaIcons from './Common/SocialMediaIcons'
import Contact from './Contact'
import Skill from './Skill'
const About = () => {
    return (
        <>
            <div className={`${style.box}`}>
                <div className={style.photo}>
                    <img
                        className={style.img}
                        src={require('../assets/img/profile/Deepak_pic.jpg')} />
                </div>
                <div className={style.About}>
                    <div className={style.header}>
                        <div className={style.title}>
                            <h1 className={style.h1}>About</h1>
                            <span className={style.span}>Me</span>
                        </div>
                        <div className={style.line} />
                        <div className={style.line} />
                    </div>
                    <div className={style.desc}>
                        <div className={style.desc_title}>
                            Nice to meet you, boss!
                        </div>
                        <div className={style.objective_title}>
                            HERE'S THE DISH ON ME.
                        </div>
                        <div className={style.objective}>
                            <span>My main objective is develop the Software and solve the real life problem and want to implement
                            that problem into the computing environment.I want to be the reason of success
                            of company wherever I work.
                          </span>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                {/* <div className={style.Contact_heading}>
                    <h1 className={style.h1}>Contact</h1>
                    <span className={style.span}>Info</span>
                </div> */}
                <Contact/>
            </div>
            <div className={style.line_black}></div>
            <div className={style.line_black}></div>
            <Skill/>
        </>

    )
}
export default About

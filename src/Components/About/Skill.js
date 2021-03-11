import React from 'react'
import style from '../../assets/css/About/Skill.module.css'
import SVGContainer from './SVGContainer'
const Skill = () => {
    return (
        <div className={style.container}>
            <div className={style.SkillContainer}>
                <div className={style.box}>
                    <SVGContainer/>
                </div>
            </div>
            <div className={style.SkillTitileContainer}>
                <h3 className={style.h1}>Skills</h3>
                <span className={style.span}>that I own</span>
            </div>
        </div>
    )
}
export default Skill

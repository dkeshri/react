import React from 'react'
import Header from '../Common/Header'
import Title from '../Common/Title'
import style from '../../assets/css/components/forms/Formic.module.css'
function Formic() {
    return (
        <div className={`${style.container} pageContainer`}>
            <Header title={"Formic Demos"}/>
            <div className={style.contentContainer}>
                <Title title={"Registration Form"}/>
                <div className={`${style.box}`}>
                    <div>
                        Registration Form
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formic

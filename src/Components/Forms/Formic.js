import React from 'react'
import Header from '../Common/Header'
import style from '../../assets/css/components/forms/Formic.module.css'
function Formic() {
    console.log(style);
    return (
        <div className={`${style.container} pageContainer`}>
            <Header title={"Formic Demos"}/>
            <div className={style.contentContainer}>
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

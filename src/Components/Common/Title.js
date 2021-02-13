import React from 'react'
import style from '../../assets/css/Title.module.css'
function Title({title}) {
    return (
        <div className={style.title}>
            <h2>{title}</h2>
        </div>
    )
}

export default Title

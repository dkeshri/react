import React from 'react'
import style from '../../assets/css/Header.module.css'
function Header({title}) {
    return (
        <div className={style.HeaderTitle}>
            <h1>{title}</h1>
        </div>
    )
}

export default Header

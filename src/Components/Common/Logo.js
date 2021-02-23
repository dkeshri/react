import React from 'react'
import style from '../../assets/css/Logo.module.css'
const Logo = () => {
    return (
        <div className={style.container}>
            <div className={style.logo_container}>
                <h3 className={style.h1}>TechWorld</h3>
                <span className={style.span_subtitle}>Programming</span>
            </div>
        </div>
    )
}
export default Logo

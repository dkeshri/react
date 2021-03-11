import React from 'react'
import style from '../../assets/css/About/svg.module.css'
const SVGContainer = () => {
    return (<>
        <div className={style.container}>
            <img className={style.img} src={require('../../assets/svg/react.svg')}></img>
        </div>
        <div className={style.container}>
            <img className={style.img} src={require('../../assets/svg/redux.svg')}></img>
        </div>
        <div className={style.container}>
            <img className={style.img} src={require('../../assets/svg/html5.svg')}></img>
        </div>
        <div className={style.container}>
            <img className={style.img} src={require('../../assets/svg/css.svg')}></img>
        </div>
        <div className={style.container}>
            <img className={style.img} src={require('../../assets/svg/js.svg')}></img>
        </div>
        <div className={style.container}>
            <img className={style.img} src={require('../../assets/svg/jquery.svg')}></img>
        </div>
        <div className={style.container}>
            <img className={style.img} src={require('../../assets/svg/bootstrap.svg')}></img>
        </div>
        <div className={style.container}>
            <img className={style.img} src={require('../../assets/svg/cpp.svg')}></img>
        </div>
        <div className={style.container}>
            <img className={style.img} src={require('../../assets/svg/csharp.svg')}></img>
        </div>
        <div className={style.container}>
            <img className={style.img} src={require('../../assets/svg/java.svg')}></img>
        </div>
    </>
    )
}

export default SVGContainer

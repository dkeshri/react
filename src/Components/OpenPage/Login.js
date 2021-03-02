import React from 'react'
import style from '../../assets/css/OpenPages/Login.module.css'
import Logo from '../Common/Logo'
function Login() {
    return (
        <div className={style.container}>
            <div className={`box ${style.box}`}>
                <div className={style.logo}>
                    <Logo />
                </div>
                <div className={style.Auth_Btn}>
                    <div className={`${style.C_button}`}>
                        <span>deee[</span>
                        <span>Sign in with Google.</span>
                    </div>
                    <br></br>
                    <div className={style.C_button}>

                        <span>Sign in with FaceBook.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

import React from 'react'
import style from '../../assets/css/OpenPages/Login.module.css'
import Logo from '../Common/Logo'
import { useGoogleLogin } from 'react-google-login';
import { AppConfig } from '../../data/AppConfig.js';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Keyboard from '@material-ui/icons/Keyboard';
import { Year } from '../../utility'
function Login() {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    const onGoogleSuccess = (res) => {
        console.log(res);

    }
    const onGoogleFailure = (res) => {
        console.log(res)
    }
    const { signIn } = useGoogleLogin({
        onSuccess: onGoogleSuccess,
        onFailure: onGoogleFailure,
        clientId: AppConfig.loginVendor.google.clientId,
        isSignedIn: true,
        accessType: 'offline'


    });
    return (
        <div className={style.container}>
            <div className={`box ${style.box}`}>
                <div className={style.logo}>
                    <Logo />
                </div>
                <div className={style.LoginForm}>
                    <div className={style.input}>
                        <AccountCircle style={{color:'#3f3f72',height:'40px',width:'40px',marginRight:'20px'}} />
                        <TextField fullWidth id="input-with-icon-grid" label="Username" />
                    </div>
                    <div className={style.input}>
                        <Keyboard style={{color:'#3f3f72',height:'40px',width:'40px',marginRight:'20px'}} />
                        <TextField fullWidth type="password" id="input-with-icon-grid" label="Password" />
                    </div>
                    <br /><br/>
                    <div className={`${style.Login_button}`}>
                        <span>Login</span>
                    </div>
                </div>
                <span>Or</span>
                <div className={style.Auth_Btn}>
                    <div className={`${style.C_button} ${style.C_btn_Dim}`} onClick={signIn}>
                        <img src={require('../../assets/svg/google.svg')}></img>
                        <span>Sign in with Google</span>
                    </div>
                    <br></br>
                    <div className={`${style.C_button} ${style.C_btn_Dim}`}>
                        <img src={require('../../assets/svg/facebook.svg')}></img>
                        <span>Sign in with FaceBook</span>
                    </div>
                </div>
                <section className={style.social_media}>
                    {/* <div>dkeshridev@gmail.com</div> */}
                    <div>Copyright © <a href='https://github.com/dkeshri'
                        target='_blank'
                        aria-label='GitHub'>TechWorld</a> {Year}.</div>
                </section>
            </div>
        </div>
    )
}

export default Login

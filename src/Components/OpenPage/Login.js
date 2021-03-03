import React from 'react'
import style from '../../assets/css/OpenPages/Login.module.css'
import Logo from '../Common/Logo'
import { useGoogleLogin } from 'react-google-login'
import { AppConfig } from '../../data/AppConfig.js'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),

    },
  }));
function Login() {
    const classes = useStyles();
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
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Username" />
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Password" />
                            </Grid>
                        </Grid>
                    </div>
                    <br/>
                    <div className={`${style.C_button} ${style.C_Login_btn_Dim}`}>
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
            </div>
        </div>
    )
}

export default Login

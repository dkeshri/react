import React from 'react'
import '../assets/css/Pages/Home.css'
import GoogleLogin from 'react-google-login'
import {AppConfig} from '../data/AppConfig.js'
function Home() {
    const responseGoogle = (res)=>{
        console.log(res);
    }
    return (
        <div className="Home-container">
            <GoogleLogin
                clientId={AppConfig.loginVendor.google.clientId}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}
export default React.memo(Home);
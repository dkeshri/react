import React from 'react'
import '../assets/css/Pages/Home.css'
import GoogleLogin from 'react-google-login'
import {AppConfig} from '../data/AppConfig.js'
function Home() {
    const responseGoogle = (res)=>{
        
    }
    return (
        <div className="Home-container">
            <GoogleLogin
                clientId={AppConfig.loginVendor.google.clientId}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />
        </div>
    )
}
export default React.memo(Home);
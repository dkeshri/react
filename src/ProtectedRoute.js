import React from 'react'
import { Redirect } from 'react-router-dom'
import Drawer from './Components/Common/Drawer'
import {NavBar} from './Components/Common/NavBar'
// import Footer from './Components/Footer'
export const ProtectedRoute = (props) => {
    const Component = props.component;
    const isAuthenticated = true;

    return isAuthenticated ? (<>
        <div id="main">
            <NavBar />
            <Drawer></Drawer>
            <div className="mainContentSection">
                <Component />
            </div>
            {/* <div style={{color:"white"}} className="footer">
                <Footer/>
            </div> */}
        </div>
    </>
    ) : (
            <Redirect to={{ pathname: '/login' }} />
        );
}
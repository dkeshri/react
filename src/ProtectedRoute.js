import React from 'react'
import { Redirect } from 'react-router-dom'
import { NavBar } from './Components/Common/NavBar'
import { motion } from 'framer-motion'
// import Footer from './Components/Footer'
const mainContentSectionVariants = {
    init: {
        opacity: 0
    },
    in: {
        opacity: 1,
        transition: { duration: 1 }
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' }
    }
}
export const ProtectedRoute = (props) => {
    const Component = props.component;
    const isAuthenticated = true;

    return isAuthenticated ? (<>
        <div id="main">
            <NavBar />
            <motion.div className="mainContentSection"
                variants={mainContentSectionVariants}
                initial="init"
                animate="in"
                exit="exit">
                <Component />
            </motion.div>
            {/* <div style={{color:"white"}} className="footer">
                <Footer/>
            </div> */}
        </div>
    </>
    ) : (
            <Redirect to={{ pathname: '/login' }} />
        );
}
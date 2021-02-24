import React from 'react'
import { Redirect } from 'react-router-dom'
import { NavBar } from './Components/Common/NavBar'
import { motion } from 'framer-motion'
import Footer from './Components/Common/Footer'
const mainContentSectionVariants = {
    init: {
        opacity: 0
    },
    in: {
        opacity: 1,
        transition: { duration: .5 ,}
    },
    exit: {
        x: '-100vw',
        transition: {duration:.5, ease: 'easeInOut' }
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
            <div style={{color:"white"}} className="footer">
                <Footer/>
            </div>
        </div>
    </>
    ) : (
            <Redirect to={{ pathname: '/login' }} />
        );
}
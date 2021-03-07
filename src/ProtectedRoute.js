import React from 'react'
import { Redirect, Route, useHistory } from 'react-router-dom'
import { NavBar } from './Components/Common/NavBar'
import { motion } from 'framer-motion'
import Footer from './Components/Common/Footer'
import Login from './Components/OpenPage/Login'
import { AppConfig } from './data/AppConfig.js'
const mainContentSectionVariants = {
    init: {
        opacity: 0
    },
    in: {
        opacity: 1,
        transition: { duration: .5, }
    },
    exit: {
        x: '-100vw',
        transition: { duration: .5, ease: 'easeInOut' }
    }
}
export const ProtectedRoute = ({ component: Component, openPage: isOpenPage, ...rest }) => {
    const isAuthenticated = AppConfig.isAuth;
    const history = useHistory()
    return (<Route
        {...rest}
        render={(prpos) => {
            if (isOpenPage) {
                return <motion.div className="mainContentSection"
                    variants={mainContentSectionVariants}
                    initial="init"
                    animate="in"
                    exit="exit">
                    <Component />
                </motion.div>
            } else if (isAuthenticated) {
                return <div id="main">
                    <NavBar />
                    <motion.div className="mainContentSection"
                        variants={mainContentSectionVariants}
                        initial="init"
                        animate="in"
                        exit="exit">
                        <Component />
                    </motion.div>
                    <div style={{ color: "white" }} className="footer">
                        <Footer />
                    </div>
                </div>
            } else {
                return <motion.div className="mainContentSection"
                    variants={mainContentSectionVariants}
                    initial="init"
                    animate="in"
                    exit="exit">
                    <Login />
                </motion.div>
            }

        }}
    />
    );
}
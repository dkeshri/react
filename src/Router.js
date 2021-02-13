import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'
import Home from './Components/Home'
import PageNotFound from './Components/Common/PageNotFound'
import Login from './Components/OpenPage/Login'
import Test from './Components/Pages/Test'
import { AnimatePresence } from 'framer-motion'
import FormicForm from './Components/Forms/Formic'
export const AppRouter = () => {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
                <Route path="/Login" exact component={Login} />
                <ProtectedRoute path="/" exact component={Home} />
                <ProtectedRoute path="/Home" exact component={Home} />
                <ProtectedRoute path="/Test" exact component={Test} />
                <ProtectedRoute path="/Components/Forms/Formic" exact component={FormicForm} />
                <Route path="*" exact component={PageNotFound} />
            </Switch>
        </AnimatePresence>
    )
}
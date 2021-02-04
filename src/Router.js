import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'
import Home from './Components/Home'
import PageNotFound from './Components/Common/PageNotFound'
import Login from './Components/OpenPage/Login'
export const AppRouter = () => {
    return (
        <Router basename="/React">
            <Switch>
                <Route path="/Login" exact component={Login} />
                <ProtectedRoute path="/" exact component={Home} />
                <ProtectedRoute path="/Home" exact component={Home} />
                <Route path="*" exact component={PageNotFound} />
            </Switch>
        </Router>
    )
}
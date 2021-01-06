import React from 'react'
import {BrowserRouter as  Router, Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import PageNotFound from './Components/Common/PageNotFound'
import Login from './Components/OpenPage/Login'

function AppRouter() {
    return (
        <Router basename="/React">
            <Switch>
                <Route  exact path="/" component={Home}/>
                <Route  exact path="/Home" component={Home}/>
                <Route  path="/Login" component={Login}/>
                <Route path="*" component={PageNotFound}/>
            </Switch>
        </Router>
    )
}

export default AppRouter

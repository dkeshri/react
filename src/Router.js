import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'
import Home from './Components/Home'
import PageNotFound from './Components/Common/PageNotFound'
import Login from './Components/OpenPage/Login'
import Test from './Components/Pages/Test'
import { AnimatePresence } from 'framer-motion'
import FormicForm from './Components/Forms/Formic'
import CustomHooksDemo from './Components/Dropdown'
import DexieDemo from './Components/Database/DexieDemo'
import { BrowserRouter as Router} from 'react-router-dom'
export const AppRouter = () => {
    
    return (
        <AnimatePresence exitBeforeEnter>
            <Router basename="/React">
            <Switch>
                <Route path="/Login" exact component={Login} />
                <ProtectedRoute path="/" exact component={Home} />
                <ProtectedRoute path="/Home" exact component={Home} />
                <ProtectedRoute path="/Test" exact component={Test} />
                <ProtectedRoute path="/Components/Forms/Formic" exact component={FormicForm} />
                <ProtectedRoute path="/CustomHooksDemo" exact component={CustomHooksDemo} />
                <ProtectedRoute path="/Database/Dexie" exact component={DexieDemo} />
               
                <Route path="*" exact component={PageNotFound} />
            </Switch>
            </Router>
        </AnimatePresence>
    )
}
import React from 'react'
import { Switch, useLocation } from 'react-router-dom'
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
import User from './Components/JsonPlaceholder/User'
import UserDetail from './Components/JsonPlaceholder/UserDetail'
import About from './Components/About/About'
export const AppRouter = () => {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
                <ProtectedRoute path="/" exact component={Home} />
                <ProtectedRoute path="/Home" exact component={Home} />
                <ProtectedRoute path="/Test" exact component={Test} />
                <ProtectedRoute path="/Components/Forms/Formic" exact component={FormicForm} />
                <ProtectedRoute path="/CustomHooksDemo" exact component={CustomHooksDemo} />
                <ProtectedRoute path="/Database/Dexie" exact component={DexieDemo} />
                <ProtectedRoute path="/Api/JsonPlaceHolder/Users" exact component={User} />
                <ProtectedRoute path="/Api/JsonPlaceHolder/UserDetail/:id" exact component={UserDetail} />
                <ProtectedRoute path="/About" exact component={About} />
                
                <ProtectedRoute path="/Login" exact component={Login} openPage />
                <ProtectedRoute path="*" exact component={PageNotFound} openPage />
            </Switch>
        </AnimatePresence>
    )
}
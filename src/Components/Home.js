import React from 'react'
import {config} from '../data/Config'
import '../assets/css/Pages/Home.css'
function Home() {
    return (
        <div className="">
            <h1>Welcome Deepak keshri</h1>
            {console.log(config.menuItems)}
        </div>
    )
}
export default React.memo(Home);
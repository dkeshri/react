import React, { useState } from 'react'
import Drawer from '../Common/Drawer'
import '../../assets/css/navbar.css'
// renaming is not allowed. if you want to rename export default
export function NavBar() {

    const [isDrawerOpened, setDrawerOpenState] = useState(false);
    const toggleDrawer = (open)=>(event) => {
        setDrawerOpenState(open);
      };
    
    return (
        <>
            <nav>
                <div className="hamburger" onClick={toggleDrawer(true)}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="logo-container">
                    <h3 className="logo">Deepak<span>_keshri</span></h3>
                </div>
            </nav>
            <Drawer isDrawerOpened={isDrawerOpened} toggleDrawer={toggleDrawer}/>
        </>
    )
}

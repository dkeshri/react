import React from 'react'
import '../../assets/css/navbar.css'
// renaming is not allowed. if you want to rename export default
export function NavBar() {
    return (
        <nav>
            <div className="hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="logo-container">
                <h3 className="logo">Deepak<span>_keshri</span></h3>
            </div>
        </nav>
    )
}
 
import React from 'react'
import '../../assets/css/SocialMediaFooter.css'
import SocialMediaIcons from './SocialMediaIcons'
import {Year} from '../../utility'
function SocialMediaFooter() {
    return (
        <section className='social-media'>
            <div>dkeshridev@gmail.com</div>
            <div>Copyright © TechWorld {Year}.</div>
            <SocialMediaIcons />
        </section>
    )
}

export default SocialMediaFooter

import React from 'react'
import '../assets/css/SocialMediaIcons.css'
function SocialMediaIcons() {
    return (
        <div className='social-icons'>
            <a
                className='social-icon-link instagram'
                href='https://www.instagram.com/deepakkeshri0613/'
                target='_blank'
                aria-label='Instagram'
            >
                <i className='fa fa-instagram' />
            </a>
            <a
                className='social-icon-link youtube'
                href='https://github.com/dkeshri'
                target='_blank'
                aria-label='GitHub'
            >
                <i className='fa fa-github-square' />
            </a>
            <a
                className='social-icon-link twitter'
                href='https://twitter.com/DeepakK18204431'
                target='_blank'
                aria-label='Twitter'
            >
                <i className='fa fa-twitter' />
            </a>
            <a
                className='social-icon-link twitter'
                href='https://in.linkedin.com/in/dkeshri'
                target='_blank'
                aria-label='LinkedIn'
            >
                <i className='fa fa-linkedin' />
            </a>
        </div>
    )
}

export default SocialMediaIcons

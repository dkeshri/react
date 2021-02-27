import React from 'react'
import style from '../../assets/css/PageContainer.module.css'
import Header from './Header'
import Title from './Title'
const PageContainer = (props) => {
    return (
        <div style={{backgroundColor:props.backgroundColor}} className={`pageContainer`}>
            <Header title={props.headerTitle} />
            <div className="contentContainer">
                <Title title={props.title} />
                {props.children}
            </div>
        </div>
    )
}

export default PageContainer

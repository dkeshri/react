import React from 'react'
import style from '../../assets/css/components/forms/Formic.module.css'
import PageContainer from '../Common/PageContainer'
function Formic() {
    return (
        <PageContainer
            headerTitle="Formic Demos"
            title="Registration Form"
        // backgroundColor="#546874"
        >
            <div className={`box`}>
                <div>
                    Registration Form
                </div>
            </div>
            <div className={`box ${style.box}`}>
                <div>
                    Registration Form
                </div>
            </div>
        </PageContainer>
    )
}

export default Formic

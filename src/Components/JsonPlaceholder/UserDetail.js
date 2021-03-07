import React from 'react'
import { useParams } from 'react-router'
import PageContainer from '../Common/PageContainer'

const UserDetail = (props) => {
    
    let {id} = useParams();
    console.log(id);
    return (
        <PageContainer
            headerTitle="User Detail"
        >
            <div>
                deepk {id}
            </div>
        </PageContainer>
    )
}
export default UserDetail

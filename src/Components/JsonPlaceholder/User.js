import React from 'react'
import PageContainer from '../Common/PageContainer'
import style from '../../assets/css/Jsonplaceholder/User.module.css'
import { useHttpRequest } from '../../ApiCall'
import UserCard from './UserCard'
const User = () => {
    let userdata = useHttpRequest({
        url: '/users',
        method: 'Get'
    }, []);
    return (
        <PageContainer
            headerTitle="Api Demo"
            title="Users">
            <div className={`box ${style.box}`}>
                {
                    userdata.fetchedData !== null ?
                    userdata.fetchedData.map((user, index) => {
                            return <UserCard key={index} user={user} />
                        }) : 'Loading...'
                }
            </div>

        </PageContainer>
    )
}
export default User

import React, { useState,useEffect } from 'react'
import PageContainer from '../Common/PageContainer'
import style from '../../assets/css/Jsonplaceholder/User.module.css'
import { useHttpRequest } from '../../ApiCall'
import UserCard from './UserCard'
const User = () => {
    const [UserList, setUserList] = useState([]);
    let userdata = useHttpRequest({
        url: '/users',
        method: 'Get'
    }, []);
    useEffect(() => {
        if (userdata.fetchedData != null) {
            setUserList(userdata.fetchedData);
        }
    }, [userdata.fetchedData]);
    return (
        <PageContainer
            headerTitle="Api Demo"
            title="Users">
            <div className={`box ${style.box}`}>
                {UserList.map((user,index)=>{
                   return <UserCard key={index} user={user}/>
                }
                )}
            </div>

        </PageContainer>
    )
}
export default User

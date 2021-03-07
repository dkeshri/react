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
            let UserOptions = userdata.fetchedData.map((item, index) => {
                return { value: item.id, label: item.name }
            });
            setUserList(UserOptions);
            console.log(userdata.fetchedData)
        }
    }, [userdata.fetchedData]);
    return (
        <PageContainer
            headerTitle="Api Demo"
            title="Users">
            <div className={`box ${style.box}`}>
                <UserCard></UserCard>
                <UserCard></UserCard>
                <UserCard></UserCard>
                <UserCard></UserCard>
                <UserCard></UserCard>
                <UserCard></UserCard>
            </div>

        </PageContainer>
    )
}
export default User

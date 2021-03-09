import React, { useState } from 'react'
import { useHistory } from 'react-router'
import style from '../../assets/css/Jsonplaceholder/UserCard.module.css'
import { motion } from 'framer-motion'
const UserCard = ({ user }) => {
    const [userId, setUsetId] = useState(user.id);
    const history = useHistory();
    return (
        <motion.div
            whileHover={{
                scale: 1.05
            }}
            className={style.box}
            onClick={() => {
                history.push(`/Api/JsonPlaceHolder/UserDetail/${userId}`);
            }}
            >
            <div className={style.company}>
                <h3>{user.company.name}</h3>
            </div>
            <div className={style.profile}>
                <div className={style.row}>
                    <h6>Name :</h6>
                    <span>{user.name}</span>
                </div>
                <div className={style.row}>
                    <h6>Username :</h6>
                    <span>{user.username}</span>
                </div>
                <div className={style.row}>
                    <h6>EmailID :</h6>
                    <span>{user.email}</span>
                </div>
            </div>
            <div className={style.line} />
            <div className={style.contact}>
                <div className={style.row}>
                    <h6>Address :</h6>
                    <div className={style.address}>
                        <span>{user.address.street}</span>
                        <span>{user.address.suite}</span>
                        <span>{user.address.city}</span>
                        <span>{user.address.zipcode}</span>
                    </div>
                </div>
                <div className={style.row}>
                    <h6>Ph. Number :</h6>
                    <span>{user.phone}</span>
                </div>
            </div>
            <div className={style.website}>
                <a href="#">{user.website} </a>
            </div>
        </motion.div>
    )
}
export default UserCard

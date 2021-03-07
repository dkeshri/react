import React from 'react'
import style from '../../assets/css/Jsonplaceholder/UserCard.module.css'
const UserCard = () => {
    return (
        <div className={style.box}>
            <div className={style.company}>
                <h3>Company_name</h3>
            </div>
            <div className={style.profile}>
                <div className={style.row}>
                    <h6>Name :</h6>
                    <span>Deepak keshri</span>
                </div>
                <div className={style.row}>
                    <h6>Username :</h6>
                    <span>dkeshri</span>
                </div>
                <div className={style.row}>
                    <h6>EmailID :</h6>
                    <span>dkeshidev@gmail.com</span>
                </div>
            </div>
            <div className={style.line}/>
            <div className={style.contact}>
                <div className={style.row}>
                    <h6>Address :</h6>
                    <div className={style.address}>
                        <span>Nangla charan das</span>
                        <span>Suite 351</span>
                        <span>Roscoeview</span>
                        <span>201306</span>
                    </div>
                </div>
                <div className={style.row}>
                    <h6>Ph. Nunber :</h6>
                    <span>(254)954-1289</span>
                </div>
            </div>
            <div className={style.website}>
                <a href="#">google.com </a>
            </div>
        </div>
    )
}
export default UserCard

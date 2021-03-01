import React, { useEffect } from 'react'
import PageContaier from '../Common/PageContainer'
import style from '../../assets/css/components/Database/DexieDemo.module.css'
import {Database} from '../../utility'
import Dexie from 'dexie'
let db = new Database('Test','User');

const DexieDemo = () => {
    const addItemToDb = async (event,item) =>{
        event.preventDefault();
        db.addRecord(item).then(data=>{console.log(data)}).catch(e=>{console.log(e)});
    }
    const removeItemFromDb = async id =>{
        await db.items.delete(id);
    }
    const updateItem = async (id,data)=>{
        await db.items.update(id,{price:data});
    }
    return (
        <PageContaier
            headerTitle="Dexie Demo"
            title="Market List App"
        >
            <div className={`box ${style.box}`}>
                <button 
                onClick={(e)=>{
                    addItemToDb(e,{name:"deepak",price:55});
                }}
                >Add data</button>
                <br></br>
                <button 
                onClick={(e)=>{
                    removeItemFromDb(1);
                }}
                >Delete</button>
                <br></br>
                <button 
                onClick={(e)=>{
                    updateItem(1,45);
                }}
                >Update</button>

            </div>
        </PageContaier>
    )
}
export default DexieDemo

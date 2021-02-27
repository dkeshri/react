import React from 'react'
import PageContaier from '../Common/PageContainer'
import style from '../../assets/css/components/Database/DexieDemo.module.css'
import Dexie from 'dexie'
import {useLiveQuery} from 'dexie-react-hooks'
const db = new Dexie('MarketList');
db.version(1).stores(
    {items:"++id,name,price"}
);
const DexieDemo = () => {
    const allItems = useLiveQuery(
        ()=>db.items.toArray()
    ,[]);
    console.log(allItems);
    const addItemToDb = async (event,item) =>{
        event.preventDefault();
        await db.items.add(item);
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

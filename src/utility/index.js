import cookie from 'react-cookies'
import Dexie from 'dexie'
export const setCookie = (argCookies = {}) => {
    let expires, path;
    if (argCookies.expires === undefined || argCookies.expires === null) {
        expires = new Date()
        expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14)
    } else {
        expires = argCookies.expires;
    }
    if (argCookies.path === undefined || argCookies.path === null) {
        path = '/';
    } else {
        path = argCookies.path;
    }
    if (argCookies.key !== undefined && argCookies.value !== undefined) {
        cookie.save(
            argCookies.key,
            argCookies.value,
            {
                path: path,
                expires,
                //maxAge: 1000,
                //domain: 'https://play.bukinoshita.io',
                secure: true,
                httpOnly: true
            }
        );
    } else {
        console.log('key and value can not be undefined');
    }
}

export const getCookie = (key) => {
    if (key !== undefined && key !== null) {
        return cookie.load(key);
    }
    else {
        console.log(`key can not be ${key}`);
    }

}
export const Year = (new Date()).getFullYear();
export class Database {
    constructor(databaseName,tableName) {
        this.db = new Dexie(databaseName);
        this.tableName = tableName;
    }
    createDatabaseSchema = (Colunms) => {
        let obj = new Object();
        obj[this.tableName] = Colunms;
        this.db.version(1).stores(obj);
    }
    addRecord = (item)=>{
        let promise = new Promise((resolve,reject)=>{
            this.db[this.tableName].add(item)
            .then(res=>{
                resolve(res);
            })
            .catch((e)=>{
                reject(new Error(e));
            })
        });
        return promise;
    }
}
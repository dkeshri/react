import { Database } from '../utility'
export const createDatabaseSchema = () => {
    let db = new Database('Test');
    db.createDatabaseSchema({
        Employee:"++id,name,price",
        User:"++id,name,price"
    });
     db = new Database('Deepak');
    db.createDatabaseSchema({
        Employee1:"++id,name,price",
        User2:"++id,name,price"
    });
}
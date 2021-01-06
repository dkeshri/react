import { Button } from '@material-ui/core';
import React from 'react'
import { useHttpRequest } from '../ApiCall';
function Utilfunction() {
    // we will learn filter and map and sort method of javacript

    let data = useHttpRequest({
        url: '/users',
        method: 'Get'
    }, []);

    const FilterButtonClick = () =>{
        let userList = data.fetchedData;
        console.log(userList);
    } 


    return (
        <div>
            <Button onClick={FilterButtonClick}> Filter object</Button>
        </div>
    )
}

export default Utilfunction

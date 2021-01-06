import React, {useEffect,useState } from 'react'
import { useHttpRequest,httpRequest } from '../ApiCall';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Select from 'react-select';
import { Button } from '@material-ui/core';
import {setCookie,getCookie} from '../utility'
const useStyles = makeStyles((theme) => ({
    root: {
        margin: '10px'
    },
    paperStyle: {
        padding: '10px',
        minHeight: '600px'
    },
    paperStyle2: {
        padding: '20px',
        margin: '50px'
    },
    SelectStyle: {
        width: '250px'
    }
}));
function Home() {
    const [selectedPost, setSelectedPost] = useState({ value: 0, label: ""});
    const [selectedUser, setSelectedUser] = useState({ value: 0, label: ""});
    const [postOptions,setPostOptions] = useState([]);
    const [userOptions,setUserOptions] = useState([]);

    let userList = useHttpRequest({
        url: '/users',
        method: 'Get'
    }, []);
    let postList = useHttpRequest({
        url: `/posts`,
        method: 'GET'
    }, []);
    let post = useHttpRequest({
        url: `/posts`,
        method: 'GET',
        params: { id: selectedPost.value }
    }, [selectedPost]);

    useEffect(()=>{
        if (postList.fetchedData != null) {
            let options = postList.fetchedData.filter((item) => {
                return item.userId===selectedUser.value;
            }).map((item) => {
                return { value: item.id, label: item.title}
            });
            setPostOptions(options);
            if(options.length!==0)
                setSelectedPost(options[0]);
        }
    },[selectedUser,postList.fetchedData]);
    
    useEffect(()=>{
            if (userList.fetchedData != null) {
                let UserOptions = userList.fetchedData.map((item, index) => {
                    return { value: item.id, label: item.name }
                });
                setUserOptions(UserOptions);
                setSelectedUser(UserOptions[0]);
            }
    },[userList.fetchedData]);
    
    //------------------------- change dropdown handler ------------------------
    const onChange = (setetedItem) => {
        setSelectedPost(setetedItem);
    }
    const onChangeUser = (selectedItem) => {
        setSelectedUser(selectedItem);
    }
    //------------------------- change dropdown handler End ------------------------

    //----------------------Cookies Example-------------------------
    setCookie({
        key:'name',
        value:'deepak'
    });
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.paperStyle}>
                <Select
                    name="form-field-name"
                    options={userOptions}
                    onChange={onChangeUser}
                    className={classes.SelectStyle}
                    value = {selectedUser}
                    placeholder = {'Select User'}
                    padding={'20px'}
                />
                <Select
                    name="form-field-name2"
                    options={postOptions}
                    onChange={onChange}
                    className={classes.SelectStyle}
                    value={selectedPost}
                    placeholder={'Select Post'}
                />
                <Paper elevation={2} className={classes.paperStyle2}>
                    {(post.fetchedData != null && post.fetchedData.length !== 0) ? post.fetchedData[0].body : ""}
                </Paper>
                <Button onClick={()=>{
                        httpRequest({
                            url: '/users',
                            method: 'Get'
                        }).then((data)=>{
                            console.log(data);
                        }).catch((e=>{
                            console.log(e);
                        }));
                        console.log(`cookie data ${getCookie('name')}`);
                }}>Click me to fetch data</Button>
            </Paper>
        </div>
    )
}

export default Home

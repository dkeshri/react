import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import { useHttpRequest } from '../../ApiCall';
import { makeStyles } from '@material-ui/core/styles';
import { config } from '../../data/NavMenuListConfig';
import { useHistory } from 'react-router-dom'
const optionList = [];
const getItemFromMenuConfig = (MenuConfig) => {
    MenuConfig.map(item => {
        if (item.children !== undefined && item.children.length !== 0) {
            getItemFromMenuConfig(item.children);
        }
        if (item.path !== undefined)
            optionList.push({ value: item.path, label: item.name });
    });
   // return optionList;
}

const useStyles = makeStyles((theme) => ({
    SelectStyle: {
        width: '250px',
        color: 'black',
        margin: '0 20px'

    }
}));
function PageSearch({seacrchBoxProps}) {
    const [menuOptions, setMenuOptions] = useState([]);
    const history = useHistory();
    useEffect(() => {
        getItemFromMenuConfig(config.menuItems);
        setMenuOptions(optionList);
    }, []);
    const onChangeSearchBox = (selectedItem) => {
        if(selectedItem.value!==undefined){
            //navigate to the path 
            //seacrchBoxProps.onChangeSearchBox(selectedItem)
            history.push(selectedItem.value)
        }
    }
    const classes = useStyles();
    return (
        <div>
            <Select
                name="form-field-name"
                options={optionList}
                onChange={onChangeSearchBox}
                className={classes.SelectStyle}
                placeholder={'Search Topic'}
                // value={seacrchBoxProps.searchBoxSeletedItem}
                padding={'20px'}
            />
        </div>
    )
}

export default PageSearch

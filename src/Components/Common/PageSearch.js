import React, { useEffect} from 'react'
import Select from 'react-select';
import { makeStyles } from '@material-ui/core/styles';
import { config } from '../../data/NavMenuListConfig';

const optionList = [];
const getItemFromMenuConfig = (MenuConfig) => {
    MenuConfig.map(item => {
        if (item.children !== undefined && item.children.length !== 0) {
            getItemFromMenuConfig(item.children);
        }
        if (item.path !== undefined)
            optionList.push({ value: item.path, label: item.name });
    });
    //return optionList;
}

const useStyles = makeStyles((theme) => ({
    SelectStyle: {
        width: '250px',
        color: 'black',
        margin: '0 20px'

    }
}));
function PageSearch({ seacrchBoxProps }) {
    useEffect(() => {
        if (optionList.length === 0)
            getItemFromMenuConfig(config.menuItems);
    }, []);
    const classes = useStyles();
    return (
        <div>
            <Select
                name="form-field-name"
                options={optionList}
                onChange={seacrchBoxProps.onChangeSearchBox}
                className={classes.SelectStyle}
                placeholder={'Search Topic'}
                value={seacrchBoxProps.searchBoxSeletedItem}
                padding={'20px'}
            />
        </div>
    )
}

export default PageSearch

import React, { useState } from 'react'
import Drawer from '../Common/Drawer'
import '../../assets/css/navbar.css'
import PageSearchBox from '../Common/PageSearch'
// renaming is not allowed. if you want to rename export default
var tempSelectedNodeList = [];
var selectedNode = 'Home';
var searchBoxSeletedItem = {};
export const NavBar = React.memo(() => {

    const [isDrawerOpened, setDrawerOpenState] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (open === false) {
            setMenuItemSelectedList(tempSelectedNodeList);
        }
        setDrawerOpenState(open);
    };
    const [menuItemSelectedList, setMenuItemSelectedList] = useState(tempSelectedNodeList);
    const [menuItemSelected, setMenuItemSelectedState] = useState(selectedNode);
    const pushMenuItemNodeIds = (nodeIds) => {
        tempSelectedNodeList = nodeIds;
    }
    const onChangeSearchBox = (selectedItem) =>{
        searchBoxSeletedItem = selectedItem;
    }
    const setSelectedItemNodeId = (nodeId) => {
        setMenuItemSelectedState(nodeId);
        selectedNode = nodeId;
    }
    return (
        <>
            <nav>
                <div className="hamburger" onClick={toggleDrawer(true)}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

                <div className="logo-container">
                    <PageSearchBox seacrchBoxProps={{searchBoxSeletedItem,onChangeSearchBox}} />
                    <h3 className="logo">Deepak<span>_keshri</span></h3>
                </div>
            </nav>
            <Drawer
                isDrawerOpened={isDrawerOpened}
                toggleDrawer={toggleDrawer}
                menuItemProps={{ menuItemSelected, menuItemSelectedList, pushMenuItemNodeIds, setSelectedItemNodeId, toggleDrawer }}
            />
        </>
    )
}
);
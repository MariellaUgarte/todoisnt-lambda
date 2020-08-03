import React from 'react';
import logo from './plus_sign.svg'

const AddItemButton = props => {
    return(
        <div onClick={props.onClick} style={{marginTop: "10px", display: "flex", alignItems: "center"}}>
            <img src={logo} style={{width: "14px", marginRight:"8px"}}/>
            Add task
        </div>);
}

export default AddItemButton;
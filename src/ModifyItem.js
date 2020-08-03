import React, {useState} from 'react';
import Button from "./Button";
import logo from './trash.svg'

const ModifyItem = props => {
    const [value, setValue] = useState(props.value)

    return(
        <div style={{marginBottom: "8px"}}>
            <input type={"text"} style={{width: "100%", height: "24px", margin: "8px 0"}} placeholder={"Write a todo..."} value={value} onChange={e => setValue(e.target.value)}/>
            <div style={{display: "flex"}}>
                <Button black onClick={() => { props.updateItem(value); props.onCancel() }}>Update</Button>
                <Button onClick={props.onCancel}>Cancel</Button>
                <img src={logo} style={{marginLeft:"auto", width: "20px"}} onClick={props.deleteItem}/>
            </div>
        </div>);
}

export default ModifyItem;
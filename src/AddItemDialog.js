import React, {useState} from 'react';
import Button from "./Button";

const AddItemDialog = props => {
    const [value, setValue] = useState("")

    return(
        <div>
            <input
                type={"text"} style={{width: "100%", height: "24px", margin: "8px 0"}}
                placeholder={"Write a todo..."}
                value={value}
                onChange={e => setValue(e.target.value)}/>
            <div style={{display: "flex"}}>
                <Button black onClick={() => { props.createItem(value); props.onCancel() }}>Add</Button>
                <Button onClick={props.onCancel}>Cancel</Button>
            </div>
        </div>);
}

export default AddItemDialog;
import React, {useState} from 'react';
import ModifyItem from "./ModifyItem";
import circle from './circle.svg'
import gray_circle from './gray_checked_circle.svg'

const Item = props => {
    const [active, toggleActive] = useState(false)

    let x = (
        <div>
            <div
                     style={{display: "flex", color: props.type === "completed" ? "gray" : "black"}}>
                <img src={props.type=== "completed" ? gray_circle : circle} onClick={props.onCompleteItemChange} style={{marginRight : "8px"}}/>
                <span onClick={() => toggleActive(true)}>{props.data}</span>
            </div>
            <hr style={{border:"none", height: "1px", backgroundColor: props.type === "completed" ? "gray" : "black"}}/>
        </div>);

    return (
        !active ?
            props.type === "completed" ?
                <del style={{color:"gray"}}>
                    {x}
                </del>
                : x
            :
            <ModifyItem
                deleteItem={props.deleteItem}
                value={props.data}
                updateItem={props.updateItem}
                onCancel={() => toggleActive(false)}/>
    )
}

export default Item;
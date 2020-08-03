import React from 'react';
import Item from "./Item";

const List = props => {
    return (
        props.type === "uncompleted" || props.visible ?
        <div>
            {props.list.map((item, idx) =>
                <Item key={`${idx}_${props.type}`}
                      type={props.type}
                      data={item}
                      onCompleteItemChange={() => props.handleCompleteItem(props.type, idx)}
                      updateItem={(new_value) => props.updateItem(idx, new_value, props.type)}
                      deleteItem={() => props.deleteItem(props.type, idx)}/>
            )}
        </div> :
        <></>
    );
}

export default List;
import React from 'react';

const Button = props => {
    return(
        <div onClick={props.onClick}
             style={{padding: "5px 8px", borderRadius: "4px", marginRight: "8px", backgroundColor: props.black ? "black" : "white"}}>
            <span style={{margin: "0", fontWeight: props.bold ? "bold" : "normal", color: props.black ? "white" : "black"}}>
                {props.children}
            </span>
        </div>
    );
}

export default Button;
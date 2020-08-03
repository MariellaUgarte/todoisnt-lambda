import React from 'react';
import Button from "./Button";

const ShowCompletedButton = props => {
    return (<Button bold onClick={props.toggleShowCompleted}>{props.active ? "Hide" : "Show Completed"}</Button>)
}

export default ShowCompletedButton;
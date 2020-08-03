import React, { useState } from 'react';
import './App.css';
import List from "./List";
import AddItemDialog from "./AddItemDialog";
import AddItemButton from "./AddItemButton";
import ShowCompletedButton from "./ShowCompletedButton";
import logo from './logo.svg'



function App() {

    const [addTask, setAddTask] = useState(false);
    const [showCompleted, toggleShowCompleted] = useState(false);
    const [list, setList] = useState([]);
    const [completedList, setCompletedList] = useState([]);

    const updateItem = (idx, new_value, type) => {
        if(type === "uncompleted") {
            let new_list = [...list];
            new_list[idx] = new_value;
            setList(new_list);
        }
        else {
            let new_completed_list = [...completedList];
            new_completed_list[idx] = new_value;
            setCompletedList(new_completed_list);
        }
    }

    const addItem = item => {
        setList([...list, item]);
    }

    const deleteItem = (type, idx) => {
        if(type === "uncompleted") {
            let new_list = [...list];
            new_list.splice(idx, 1);
            setList(new_list);
        }
        else {
            let new_completed_list = [...completedList];
            new_completed_list.splice(idx, 1);
            setCompletedList(new_completed_list);
        }
    }

    const handleCompleteItem = (type, idx) => {
        if(type === "uncompleted") {
            let completed_item = list[idx];
            let new_list = [...list];
            new_list.splice(idx, 1);
            setList(new_list);
            setCompletedList([...completedList, completed_item])
        }
        else {
            let uncompleted_item = completedList[idx];
            let new_completed_list = [...completedList];
            new_completed_list.splice(idx, 1);
            setCompletedList(new_completed_list);
            setList([...list, uncompleted_item])
        }
    }

  return (
    <div className="App">
        <div style={{display: "flex", width: "100%", alignItems: "flex-start", margin: "20px"}}>
            <img src={logo} alt={"logo"}/>
        </div>
        <div className={"main"}>
            <h2>Todos</h2>
            <List deleteItem={deleteItem} list={list} updateItem={updateItem} handleCompleteItem={handleCompleteItem} type={"uncompleted"}/>
            {addTask ?
                <AddItemDialog createItem={(item) => addItem(item)} onCancel={() => setAddTask(false)}/> :
                <AddItemButton onClick={() => setAddTask(true)}/>}
                <div style={{marginLeft: "auto"}}>
                    <ShowCompletedButton active={showCompleted} toggleShowCompleted={() => toggleShowCompleted(!showCompleted)}/>
                </div>
            <List visible={showCompleted}
                  deleteItem={deleteItem}
                  list={completedList}
                  updateItem={updateItem}
                  handleCompleteItem={handleCompleteItem}
                  type={"completed"}/>
        </div>
    </div>
  );
}

export default App;

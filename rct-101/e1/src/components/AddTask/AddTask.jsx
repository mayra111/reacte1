import React, { useState } from "react";
// import Tasks from "../Tasks/Tasks";
import styles from "./addTask.module.css";
import { Todolist } from "./Todolist";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [inputList, setInputList] = useState("");
  const [items, setItem] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  }
  const listOfItem = () => {
    setItem((list) => {
      return [...list, inputList];
    });
    setInputList("")
  };

return (
  <> 
 

    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Add task" onChange={itemEvent} value={inputList} />
      <button data-cy="add-task-button" onClick={listOfItem}>+</button>
    </div>

    <ol>
      {items.map((itemval)=>{
      return <Todolist tasklist={itemval}/>
      //  return <Tasks  tasklist={itemval} />
    })}
    </ol>
    </>
);
};

export default AddTask;

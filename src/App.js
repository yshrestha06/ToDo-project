import React, { useState } from "react";
import "./App.css";


function App() {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  

  const updateInput = (value) => {
    setUserInput(value);
  };

  const addItem = () => {
    if (userInput.trim() !==""){
      const newItem ={
        id:Math.random(),
        value: userInput,
      };
      setList([...list, newItem]);
      setUserInput("");
    }
  };

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id))
;  };

  const editItem = (index) => {
    if (userInput.trim() !=="" && editIndex !== null){
      const updatedList =[...list];
      updatedList[editIndex].value = userInput;
      setList(updatedList);
      setUserInput("");
      setIsEditing(false);
      setEditIndex(null);
    }
  };

  const handleEditClick = (index) => {
    setUserInput(list[index].value);
    setIsEditing(true);
    setEditIndex(index);
  }


  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="input">
        <input 
        type = "text"
        value={userInput}
        onChange={(e) => updateInput(e.target.value)}
        placeholder ="Add an item..."
        required
        />
        <button onClick={isEditing? editItem : addItem}>{isEditing? "Update" : "Add"}</button>
      </div>
      <ul className="todoList">
        {list.map((item, index) => (
          <li key={item.id} className="todoItem">
            <span>{item.value}</span>
            <div>
              <button onClick={() => handleEditClick(index)}>Edit</button>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </div>
          </li>
        )
        )}
      </ul>
    </div>
  );
}
export default App;

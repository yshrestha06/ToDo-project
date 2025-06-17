import React, { useState } from "react";
import "./App.css";


function App() {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

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
    const editedValue = prompt("Edit the item:");
    if (editedValue && editedValue.trim() !== ""){
      const updatedList =[...list];
      updatedList[index].value = editedValue;
      setList(updatedList);
    }
  };


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
        <button onClick={addItem}>ADD</button>
      </div>
      <ul className="todoList">
        {list.map((item, index) => (
          <li key={item.id} className="todoItem">
            <span>{item.value}</span>
            <div>
              <button onClick={() => editItem(index)}>Edit</button>
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

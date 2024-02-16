import React, { useEffect, useState } from "react";

const DropDown = () => {
  const array = ["Volvo", "Sabb", "Mercedes", "Audi"];
  const [newTask, setNewTask] = useState([]);
  const [inputText, setInputText] = useState("");
  useEffect(() => {
    setNewTask(array);
  }, []);
  return (
    <div>
      <h1>To Do List</h1>
      <ul>
        {newTask.map((item) => {
          return <List value={item} />;
        })}
      </ul>

      <div className="newList">
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        ></input>
        <button
          className="btn"
          onClick={() => {
            setNewTask([...newTask, inputText]);
          }}
        >
          Add New
        </button>
      </div>
    </div>
  );
};

export default DropDown;

const List = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isRemove, setIsRemove] = useState(true);

  return (
    <div className={isRemove ? "show" : "hide"}>
      <input
        type="checkbox"
        value={props.value}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      {props.value}
      <button
        className={isChecked ? "show btn-del" : "hide"}
        onClick={() => {
          setIsRemove(!setIsRemove);
        }}
      >
        Remove
      </button>
    </div>
  );
};

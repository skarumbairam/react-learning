import { useEffect, useState } from "react";

const todoList = [
  { task: "Task 1", completed: false, id: 1 },
  { task: "Task 2", completed: false, id: 2 },
];

const ToDoList = () => {
  const [taskeItem, setTaskItem] = useState(todoList);
  const [text, setText] = useState("");

  const addTaskHandler = (e) => {
    setText(e.target.value);
  };

  const onSubmitTaskHandler = () => {
    const newTask = {};
    newTask["task"] = text;
    newTask["completed"] = false;
    newTask["id"] = new Date().now();
    setText("");
    setTaskItem([...taskeItem, newTask]);
  };

  const deleteHandler = (idx) => {
    setTaskItem(taskeItem.filter((item) => item.id !== idx));
  };

  const editAndUpdateHandler = (updateText, taskIdx) => {
    taskeItem[taskIdx].task = updateText;
  };

  useEffect(() => {
    console.log("Task Item Updating", taskeItem);
  }, [taskeItem]);

  return (
    <div>
      <h3>To Do List</h3>

      <div className="flex">
        <input
          className="border border-blue-100 m-2 p-2"
          type="text"
          value={text}
          onChange={(e) => addTaskHandler(e)}
        />
        <button
          className="border border-blue-100 m-2 p-2"
          onClick={() => onSubmitTaskHandler()}
        >
          Add
        </button>
      </div>

      <div className="w-8/12 mx-0">
        <div className="flex border border-blue-300 justify-between">
          <p>Task</p>
          <p> Total Tasks: {taskeItem.length}</p>
        </div>
        {taskeItem.map((task, index) => {
          return (
            <TaskItem
              key={`taskitem-${index}`}
              taskItem={task}
              deleteHandler={deleteHandler}
              editUpateHandler={editAndUpdateHandler}
              idx={task.id}
              taskIdx={index}
            />
          );
        })}
      </div>
    </div>
  );
};

// Task Item
const TaskItem = (props) => {
  const { task, id, completed } = props.taskItem;
  const { idx, deleteHandler, editUpateHandler, taskIdx } = props;
  const [showIput, setShowInput] = useState(false);
  const [updateText, setUpdateText] = useState(task);

  const taskDeleteHandler = () => {
    deleteHandler(idx);
  };

  const taskEditHandler = () => {
    setShowInput(!showIput);
  };

  const updateTaskHandler = (e) => {
    setUpdateText(e.target.value);
  };

  const updateHandler = () => {
    setUpdateText("");
    setShowInput(!showIput); // To hide box
    editUpateHandler(updateText, taskIdx);
  };

  return (
    <div className="w-8/12 mx-0">
      <div className="flex border border-blue-300 items-center justify-between text-xs relative">
        <p>Task Id : {id}</p>
        <p>Task Index : {taskIdx}</p>
        <p>{task}</p>

        {showIput && (
          <div className="flex bg-black text-white absolute top-0 left-0 z-20 min-h-10 w-5/6">
            <input
              type="text"
              value={updateText}
              className="border border-blue-100 m-2 p-2 text-black"
              onChange={(e) => updateTaskHandler(e)}
            />
            <button
              className="border border-blue-100 m-2 p-2"
              onClick={() => updateHandler()}
            >
              {" "}
              Update{" "}
            </button>
          </div>
        )}

        <div>
          <button
            className="border border-cyan-600 p-3 m-2"
            onClick={() => {
              taskEditHandler();
            }}
          >
            {" "}
            Edit{" "}
          </button>
          <button
            className="border border-cyan-600 p-3 m-2"
            onClick={() => taskDeleteHandler()}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;

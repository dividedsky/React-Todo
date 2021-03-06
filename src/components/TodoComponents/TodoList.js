import React from "react";
import Todo from "./Todo";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

function TodoList(props) {
  return (
    <div>
      <ul className="todoList">
      {props.todoArr.map(t => (
        <Todo 
        key={t.id} 
        todo={t} 
        toggleCompleted={props.toggleCompleted} 
        />
      ))}
      </ul>
    </div>
  );
}

export default TodoList;

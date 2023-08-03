import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [toDos, setToDos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setToDos((currentToDos) => {
      return [
        ...currentToDos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    setNewItem("");
  }

  function toggleTodo(id, completed) {
    // console.log("enter here", id, completed);
    setToDos((currentToDos) => {
      return currentToDos.map((toDo) => {
        if (toDo.id === id) {
          return { ...toDo, completed };
        }
        return toDo;
      });
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1>Todo List</h1>
      <ul className="list">
        {toDos.map((toDo) => {
          return (
            <li key={toDo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={toDo.completed}
                  onChange={(e) => toggleTodo(toDo.id, e.target.checked)}
                />
                {toDo.title}
              </label>
              <button className="btn btn-danger">Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

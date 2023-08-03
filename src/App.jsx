import { useEffect, useState } from "react";
import "./styles.css";
import { NewToDoForm } from "./NewToDoForm";
import { ToDoList } from "./ToDoList";

export default function App() {
  const [toDos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("ITEM")
    if (localValue == null) return;
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(toDos));
  }, [toDos])

  function addToDo(title) {
    setToDos((currentToDos) => {
      return [
        ...currentToDos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleToDo(id, completed) {
    console.log("enter here", id, completed);
    setToDos((currentToDos) => {
      return currentToDos.map((toDo) => {
        if (toDo.id === id) {
          return { ...toDo, completed };
        }
        return toDo;
      });
    });
  }

  function deleteToDo(id) {
    setToDos((currentToDos) => {
      return currentToDos.filter((toDo) => toDo.id !== id);
    });
  }

  return (
    <>
      <NewToDoForm onSubmit={addToDo} />
      <h1>Todo List</h1>
      <ToDoList toDos={toDos} toggleToDo={toggleToDo} deleteToDo={deleteToDo} />
    </>
  );
}

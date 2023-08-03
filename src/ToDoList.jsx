import PropTypes from "prop-types";
import { ToDoItem } from "./ToDoItem";

export function ToDoList({ toDos, toggleToDo, deleteToDo }) {
  return (
    <>
      <ul className="list">
        {toDos.length === 0 && "No ToDos found"}
        {toDos.map((toDo) => {
          return (
            <ToDoItem {...toDo} key={toDo.id} toggleToDo={toggleToDo} deleteToDo={deleteToDo}/>
          );
        })}
      </ul>
    </>
  );
}

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired,
  toggleToDo: PropTypes.func.isRequired,
  deleteToDo: PropTypes.func.isRequired,
};

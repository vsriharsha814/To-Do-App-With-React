import { useState } from "react";
import PropTypes from "prop-types";

export function NewToDoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem.trim() === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
          autoComplete="off"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}

NewToDoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

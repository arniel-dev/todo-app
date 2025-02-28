import React, { useState } from "react";
import { faEdit, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../styles/categoryManagement.scss";
import IconButton from "../components/IconButton";

const CategoryManagement = ({ onClose }) => {
  const [categories, setCategories] = useState([{ id: 1, name: "To Do" }]);
  const [currentCategory, setCurrentCategory] = useState({
    id: null,
    name: "",
  });

  const [editingCategoryId, setEditingCategoryId] = useState(null);

  const handleInputChange = (e) => {
    setCurrentCategory({ ...currentCategory, name: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCategory = {
      id: categories.length + 1,
      name: currentCategory.name,
    };
    setCategories([...categories, newCategory]);

    setCurrentCategory({ id: null, name: "" });
  };

  const handleInlineEditChange = (id, value) => {
    const updatedCategories = categories.map((cat) =>
      cat.id === id ? { ...cat, name: value } : cat
    );
    setCategories(updatedCategories);
  };

  const enableInlineEdit = (id) => {
    setEditingCategoryId(id);
  };

  const saveInlineEdit = (id) => {
    setEditingCategoryId(null);
  };

  const handleDelete = (id) => {
    const filteredCategories = categories.filter((cat) => cat.id !== id);
    setCategories(filteredCategories);
  };

  return (
    <div className="category-management">
      <h2>Manage Category</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={currentCategory.name}
          onChange={handleInputChange}
          placeholder="Category Name"
          required
        />
        <button type="submit">{"Add"}</button>
      </form>

      <ul className="category-list">
        {categories.map((category) => (
          <li key={category.id} className="category-item">
            {editingCategoryId === category.id ? (
              <div className="inline-edit-container">
                <input
                  type="text"
                  value={category.name}
                  onChange={(e) =>
                    handleInlineEditChange(category.id, e.target.value)
                  }
                />
                <IconButton
                  onClick={() => saveInlineEdit(category.id)}
                  ariaLabel="Save"
                  icon={faSave}
                />
              </div>
            ) : (
              <span>{category.name}</span>
            )}
            <div>
              {!editingCategoryId && (
                <IconButton
                  onClick={() => enableInlineEdit(category.id)}
                  ariaLabel="Edit"
                  icon={faEdit}
                  backgroundColor="#32cd32"
                />
              )}

              <IconButton
                onClick={() => handleDelete(category.id)}
                ariaLabel="Delete"
                icon={faTrash}
                backgroundColor="#ff6347"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryManagement;

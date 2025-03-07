import React, { useEffect, useState } from "react";
import {
  faEdit,
  faSave,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/categoryManagement.scss";
import PropTypes from "prop-types";
import IconButton from "./IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTicketStore from "../store/ticketStore";
import { useUpdateCategory } from "../hooks/useUpdateCategory";
import { useAddCategory } from "../hooks/useAddCategory";
import useAuth from "../hooks/useAuth";
import { useDeleteCategory } from "../hooks/useDeleteCategory";
import { toast } from "react-toastify";
import useGetCategories from "../hooks/useGetCategories";
import Loader from "./Loader";

const CategoryManagement = ({ onClose }) => {
  const { categories, isLoading } = useGetCategories();
  const { setCategories } = useTicketStore();
  const { userInfo } = useAuth();
  const [currentCategory, setCurrentCategory] = useState({
    id: null,
    name: "",
  });

  const addCategory = useAddCategory();
  const updateCategory = useUpdateCategory();
  const deleteCategory = useDeleteCategory();

  const [editingCategoryId, setEditingCategoryId] = useState(null);

  const handleInputChange = (e) => {
    setCurrentCategory({ ...currentCategory, name: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = categories?.length + 1;
    const newCategory = {
      id: categories.length + 1,
      name: currentCategory.name,
      order: order,
    };
    addCategory.mutate({ category: newCategory, user_id: userInfo.user_id });
    if (addCategory.isSuccess) {
      toast.success(`Category "${newCategory.name}" was successfully created"`);
    }
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
    const editedCategory = categories.find((item) => item.id === id);
    updateCategory.mutate({
      categoryId: id,
      name: editedCategory.name,
      user_id: userInfo.user_id,
    });
    if (updateCategory.isSuccess) {
      toast.success(
        `Category "${editedCategory.name}" was successfully updated"`
      );
    }
    setEditingCategoryId(null);
  };
  const handleDelete = (id) => {
    deleteCategory.mutate(id);
    if (deleteCategory.isSuccess) {
      const deletedCategory = categories.find((item) => item.id === id);
      toast.success(`Category "${deletedCategory.name}" was deleted"`);
    } else {
      toast.error(
        `"${
          deleteCategory.error.message ??
          "Error cannot be deleted, you have an existing ticket under this category"
        }`
      );
    }
  };
  if (isLoading) return <Loader />;
  return (
    <div className="category-management">
      <div className="header">
        <h2>Manage Category</h2>
        <button onClick={() => onClose()} className="close-button">
          <FontAwesomeIcon icon={faTimes} className="close-icon" />
        </button>
      </div>

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
                  autoFocus
                />
                <IconButton
                  onClick={() => saveInlineEdit(category.id)}
                  ariaLabel="Save"
                  icon={faSave}
                  backgroundColor="var(--primary-color)"
                />
              </div>
            ) : (
              <span>{category.name}</span>
            )}
            <div>
              {!editingCategoryId && (
                <>
                  <IconButton
                    onClick={() => enableInlineEdit(category.id)}
                    ariaLabel="Edit"
                    icon={faEdit}
                    backgroundColor="#32cd32"
                  />
                  <IconButton
                    onClick={() => handleDelete(category.id)}
                    ariaLabel="Delete"
                    icon={faTrash}
                    backgroundColor="#ff6347"
                  />
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
CategoryManagement.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
export default CategoryManagement;

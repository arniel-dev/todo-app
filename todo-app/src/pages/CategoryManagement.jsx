import { useEffect, useState } from "react";
import { useTaskStore } from "../store/taskStore";

const CategoryManagement = () => {
  const {
    categories,
    fetchCategories,
    addCategory,
    deleteCategory,
    updateCategory,
  } = useTaskStore();
  const [newCategory, setNewCategory] = useState("");
  const [editCategory, setEditCategory] = useState(null);
  const [updatedCategory, setUpdatedCategory] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory)) {
      addCategory(newCategory);
      setNewCategory("");
    }
  };

  const handleDeleteCategory = (category) => {
    deleteCategory(category);
  };

  const handleUpdateCategory = (oldCategory) => {
    if (updatedCategory.trim() && !categories.includes(updatedCategory)) {
      updateCategory(oldCategory, updatedCategory);
      setEditCategory(null);
      setUpdatedCategory("");
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md w-1/3">
      <h2 className="font-bold text-lg mb-2">Manage Categories</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="New Category"
          className="p-2 border rounded w-full"
        />
        <button
          onClick={handleAddCategory}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className="flex justify-between items-center p-2 bg-white mb-2 rounded"
          >
            {editCategory === category ? (
              <>
                <input
                  type="text"
                  value={updatedCategory}
                  onChange={(e) => setUpdatedCategory(e.target.value)}
                  className="p-1 border rounded w-full"
                />
                <button
                  onClick={() => handleUpdateCategory(category)}
                  className="ml-2 bg-green-500 text-white px-3 py-1 rounded"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{category}</span>
                <div>
                  <button
                    onClick={() => setEditCategory(category)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteCategory(category)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryManagement;

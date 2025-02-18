import { create } from "zustand";
import axios from "axios";

export const useTaskStore = create((set) => ({
  categories: [],
  tasks: [],
  moveTask: (taskId, newCategory) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, category: newCategory } : task
      ),
    })),

  fetchTasks: async () => {
    const { data } = await axios.get("http://localhost:5000/api/tasks");
    set({ tasks: data });
  },
  addTask: async (task) => {
    const { data } = await axios.post("http://localhost:5000/api/task", task);
    set((state) => ({ tasks: [...state.tasks, data] }));
  },
  updateTask: async (id, updates) => {
    await axios.put(`http://localhost:5000/api/task/${id}`, updates);
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, ...updates } : task
      ),
    }));
  },
  deleteTask: async (id) => {
    await axios.delete(`http://localhost:5000/api/task/${id}`);
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) }));
  },

  //categories
  fetchCategories: async () => {
    const { data } = await axios.get("http://localhost:5000/api/categories");
    const response = data.map((i) => i?.name);
    set({ categories: response });
  },
  addCategory: async (newCategory) => {
    await axios.post("http://localhost:5000/api/category", {
      name: newCategory,
    });

    set((state) => ({ categories: [...state.categories, newCategory] }));
  },
  deleteCategory: (categoryToDelete) =>
    set((state) => {
      const hasTasks = state.tasks.some(
        (task) => task.category === categoryToDelete
      );
      if (hasTasks) {
        alert("Cannot delete category with tasks.");
        return state;
      }
      return {
        categories: state.categories.filter(
          (category) => category !== categoryToDelete
        ),
      };
    }),
  updateCategory: (oldCategory, newCategory) =>
    set((state) => ({
      categories: state.categories.map((category) =>
        category === oldCategory ? newCategory : category
      ),
      tasks: state.tasks.map((task) =>
        task.category === oldCategory
          ? { ...task, category: newCategory }
          : task
      ),
    })),
}));

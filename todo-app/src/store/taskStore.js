import { create } from "zustand";
import axios from "axios";

export const useTaskStore = create((set) => ({
  tasks: [],
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
}));

import { useEffect, useState } from "react";
import { useTaskStore } from "../store/taskStore";

export default function TaskBoard() {
  const { tasks, fetchTasks, addTask, deleteTask } = useTaskStore();
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    category: "To Do",
    priority: "Medium",
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async () => {
    if (!newTask.title) return alert("Title is required");
    await addTask(newTask);
    setNewTask({
      title: "",
      description: "",
      category: "To Do",
      priority: "Medium",
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Task Board</h1>
      {/* New Task Form */}
      <div className="flex flex-col p-4 bg-gray-200 rounded">
        <input
          type="text"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="p-2 border rounded mb-2"
        />
        <textarea
          placeholder="Description"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          className="p-2 border rounded mb-2"
        />
        <select
          value={newTask.category}
          onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
          className="p-2 border rounded mb-2"
        >
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
        <select
          value={newTask.priority}
          onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
          className="p-2 border rounded mb-2"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <button
          onClick={handleAddTask}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {["To Do", "In Progress", "Done"].map((category) => (
          <div key={category} className="p-4 bg-gray-100 rounded shadow">
            <h2 className="text-xl font-bold">{category}</h2>
            {tasks
              .filter((task) => task.category === category)
              .map((task) => (
                <div key={task.id} className="p-2 mt-2 border rounded bg-white">
                  <h3 className="font-bold">{task.title}</h3>
                  <p className="text-sm">{task.description}</p>
                  <p className="text-xs">Priority: {task.priority}</p>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500 mt-1"
                  >
                    Delete
                  </button>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { useTaskStore } from "../store/taskStore";

export default function TaskBoard() {
  const {
    tasks,
    fetchTasks,
    addTask,
    deleteTask,
    categories,
    moveTask,
    fetchCategories,
  } = useTaskStore();

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    category: "To Do",
    priority: "Medium",
  });

  const [draggingTask, setDraggingTask] = useState(null);

  useEffect(() => {
    fetchCategories();
    fetchTasks();
  }, []);

  const handleDragStart = (e, taskId) => {
    setDraggingTask(taskId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (category) => {
    if (draggingTask) {
      moveTask(draggingTask, category);
      setDraggingTask(null);
    }
  };

  const handleAddTask = async () => {
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
      <div className="flex gap-4 p-4">
        {categories.map((category) => (
          <div
            key={category}
            className="w-1/3 bg-gray-100 p-4 rounded-lg shadow-md"
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(category)}
          >
            <h2 className="font-bold text-lg mb-2">{category}</h2>
            {tasks
              .filter((task) => task.category === category)
              .map((task) => (
                <div
                  key={task.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task.id)}
                  className="bg-white p-2 my-2 rounded shadow cursor-pointer"
                >
                  {task.title}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

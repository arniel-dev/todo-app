# To-Do Board App

A modern and efficient To-Do Board application to help you manage your tasks seamlessly. This project features a **Node.js (Express.js)** backend with **MySQL** for data storage and a **Vite + React.js** frontend with **SCSS** for styling, **Zustand** for state management, **TanStack Query** for data fetching, and **React Hook Form** for form handling.

---

## 📌 Table of Contents

- [Features](#features)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

---

## 🚀 Features

✅ **Task Management**: Create, update, and delete tasks effortlessly.  
✅ **Real-Time Updates**: TanStack Query ensures smooth data synchronization.  
✅ **State Management**: Zustand provides a lightweight and efficient state management solution.  
✅ **Form Handling**: React Hook Form simplifies form validation and submission.  
✅ **Responsive Design**: SCSS ensures a clean and responsive UI.  
✅ **Database Integration**: MySQL for reliable and scalable data storage.  

---

## ⚙️ Installation

Follow these steps to set up the project locally:

### 📌 Prerequisites

- **Node.js** (v20 or higher)
- **MySQL** (installed and running)

### 🔧 Backend Setup

1. Navigate to the `backend` folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file:
   ```env
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASS=your_mysql_password
   DB_NAME=todo_board
   PORT=5000
   CLIENT_ORIGIN=http://localhost:5173
   ```
   **Note:** No need to create a database manually; it will be handled by the application.
4. Run the backend:
   ```sh
   npm start
   ```
   The backend will run on `http://localhost:5000` by default.

### 🖥️ Frontend Setup

1. Navigate to the `todo-app` folder:
   ```sh
   cd todo-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file:
   ```env
   VITE_API_KEY=YOUR_API_KEY
   VITE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
   VITE_PROJECT_ID=YOUR_PROJECT_ID
   VITE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
   VITE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
   VITE_APP_ID=YOUR_APP_ID
   VITE_MEASUREMENT_ID=MEASUREMENT_ID
   VITE_API_BASE_URL=http://localhost:5000
   ```
4. Run the frontend app:
   ```sh
   npm run dev
   ```

---

## 📂 Project Structure

```
project-root/
├── backend/          # Backend code
│   ├── config/       # Configuration files (e.g., database)
│   ├── controllers/  # Route controllers
│   ├── models/       # Models
│   ├── routes/       # API routes
│   ├── services/     # Handles query logic
│   ├── utils/        # Utility functions
│   ├── .env          # Environment variables
│   ├── package.json  # Backend dependencies
│   └── ...           # Other backend files
│
├── todo-app/         # Frontend code
│   ├── public/       # Static assets
│   ├── src/          # Source files
│   │   ├── components/  # React components
│   │   ├── hooks/        # Custom hooks
│   │   ├── store/        # Zustand store
│   │   ├── styles/       # SCSS files
│   │   ├── pages/        # Landing page / Login and Board
│   │   ├── api/          # API services
│   │   ├── App.jsx       # Main app component
│   │   └── main.jsx      # Entry point
│   ├── package.json  # Frontend dependencies
│   └── ...           # Other frontend files
│
└── README.md         # Project documentation
```

---

## 🛠 Technologies Used

### **Backend**
- 🟢 **Node.js**: JavaScript runtime for the backend.
- 🚀 **Express.js**: Web framework for building RESTful APIs.
- 🛢 **MySQL**: Relational database for storing tasks.

### **Frontend**
- ⚡ **Vite**: Fast build tool for React.
- ⚛️ **React.js**: Frontend library for building user interfaces.
- 🎨 **SCSS**: CSS preprocessor for styling.
- 🔄 **Zustand**: Lightweight state management library.
- 🔍 **TanStack Query**: Data fetching and synchronization.
- 📋 **React Hook Form**: Form handling and validation.

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙌 Acknowledgements

- **Vite** - For providing a fast and modern build tool.
- **Zustand** - For simplifying state management.
- **TanStack Query** - For seamless data fetching and caching.
- **React Hook Form** - For making form handling a breeze.
- **MySQL** - For reliable data storage.

---

## 📬 Contact

📌 **Arniel Canillo**  
📧 Email: [canilloarnielz@gmail.com](mailto:canilloarnielz@gmail.com)  
🐙 GitHub: [arniel-dev](https://github.com/arniel-dev) | [cwt-arcanzi](https://github.com/cwt-arcanzi)  



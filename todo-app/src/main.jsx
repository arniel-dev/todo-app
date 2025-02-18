import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import "./index.css";
import Loader from "./components/Loader";
import CategoryManagement from "./pages/CategoryManagement";
// Lazy load pages
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const TaskBoard = lazy(() => import("./pages/TaskBoard"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<TaskBoard />} />
            <Route path="/manage-category" element={<CategoryManagement />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

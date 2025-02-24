import React, { Suspense, lazy } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import "./App.scss";
import "./styles/global.scss";

import Loader from "./components/Loader";
import CategoryManagement from "./pages/CategoryManagement";

// Lazy load pages
const Login = lazy(() => import("./pages/Login"));
const Board = lazy(() => import("./pages/Board"));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Board />} />
            <Route path="/manage-category" element={<CategoryManagement />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

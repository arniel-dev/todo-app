import React, { Suspense, lazy } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import "./App.scss";
import "./styles/global.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader";
import HistoryLog from "./components/HistoryLog";

// Lazy load pages
const Login = lazy(() => import("./pages/Login"));
const Board = lazy(() => import("./pages/Board"));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Board />} />
            <Route path="/history" element={<HistoryLog />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

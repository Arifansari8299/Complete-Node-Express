import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const Register = React.lazy(()=> import("./pages/Register"));
const Login = React.lazy(()=> import("./pages/Login"));
const Dashboard = React.lazy(()=> import("./pages/Dashboard"))

const App = () => {
const isAuth = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Suspense fallback = {<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={isAuth ? <Dashboard /> : <Navigate to="/login"/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

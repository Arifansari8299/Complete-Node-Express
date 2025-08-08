import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Register from "./pages/Register";
const Register = React.lazy(()=> import("./pages/Register"));
const Login = React.lazy(()=> import("./pages/Login"));
const Dashboard = React.lazy(()=> import("./pages/Dashboard"))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback = {<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

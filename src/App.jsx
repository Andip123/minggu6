import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register"
import Dashboard from "./Pages/admin/Dashboard";
import Mahasiswa from "./Pages/admin/Mahasiswa";

function App() {
  const [registeredUsers, setRegisteredUsers] = useState([]); // State untuk pengguna yang terdaftar

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={<Login registeredUsers={registeredUsers} />}
        />
        <Route
          path="/register"
          element={<Register setRegisteredUsers={setRegisteredUsers} />}
        />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/mahasiswa" element={<Mahasiswa />} />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ registeredUsers }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Validasi login
    const userExists = registeredUsers.find(
      (user) => user.username === credentials.username && user.password === credentials.password
    );

    if (userExists) {
      alert("Login berhasil!");
      navigate("/admin/dashboard"); // Redirect ke dashboard
    } else {
      alert("Username atau password salah!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form className="p-4 border rounded" onSubmit={handleLogin}>
        <h1 className="text-lg font-bold mb-4">Login</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleInputChange}
          className="border px-2 py-1 mb-2 w-full"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleInputChange}
          className="border px-2 py-1 mb-2 w-full"
        />
        <button className="bg-blue-500 text-white px-4 py-2 w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;

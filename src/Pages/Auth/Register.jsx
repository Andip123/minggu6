import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ setRegisteredUsers }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "", email: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Simpan data ke state atau API
    setRegisteredUsers((prevUsers) => [...prevUsers, credentials]);

    alert("Registrasi berhasil, silakan login!");
    navigate("/login"); // Redirect ke halaman login
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form className="p-4 border rounded" onSubmit={handleRegister}>
        <h1 className="text-lg font-bold mb-4">Register</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleInputChange}
          className="border px-2 py-1 mb-2 w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
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
        <button className="bg-blue-500 text-white px-4 py-2 w-full">Register</button>
      </form>
    </div>
  );
};

export default Register;

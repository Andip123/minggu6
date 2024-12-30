import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <aside className="bg-gray-800 text-white w-64 p-4">
        <nav>
          <ul>
            <li className="mb-2"><a href="#" className="block px-4 py-2">Dashboard</a></li>
            <li className="mb-2"><a href="#" className="block px-4 py-2">Mahasiswa</a></li>
          </ul>
        </nav>
      </aside>
      <div className="flex-1">
        <header className="bg-gray-200 p-4">Admin Header</header>
        <main className="p-4">{children}</main>
        <footer className="bg-gray-200 p-4 text-center">Footer</footer>
      </div>
    </div>
  );
};

export default AdminLayout;
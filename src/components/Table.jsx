import React from "react";

const Table = ({ data, onEdit, onDelete }) => {
  return (
    <table className="table-auto w-full border border-gray-300 bg-white">
      <thead>
        <tr className="bg-gray-200">
          <th className="border px-4 py-2">NIM</th>
          <th className="border px-4 py-2">Nama</th>
          <th className="border px-4 py-2">Jurusan</th>
          <th className="border px-4 py-2">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.nim}>
            <td className="border px-4 py-2">{item.nim}</td>
            <td className="border px-4 py-2">{item.nama}</td>
            <td className="border px-4 py-2">{item.jurusan}</td>
            <td className="border px-4 py-2">
              <button
                onClick={() => onEdit(item.nim)}
                className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(item.nim)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
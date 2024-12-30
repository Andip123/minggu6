import React, { useState } from "react";
import Table from "../../components/Table";

const Mahasiswa = () => {
  const [data, setData] = useState([{ nim: "101", nama: "Budi Santoso" }]);

  const handleAdd = () => {
    const newNim = prompt("Masukkan NIM:");
    const newNama = prompt("Masukkan Nama:");
    if (newNim && newNama) {
      setData([...data, { nim: newNim, nama: newNama }]);
    }
  };

  const handleDelete = (nim) => {
    setData(data.filter((item) => item.nim !== nim));
  };

  return (
    <div>
      <h1>Mahasiswa</h1>
      <button onClick={handleAdd}>Tambah Mahasiswa</button>
      <Table data={data} onDelete={handleDelete} />
    </div>
  );
};

export default Mahasiswa;

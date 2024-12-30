import React, { useState } from "react";
import Table from "../../components/Table";

const Dashboard = () => {
  const [dataMahasiswa, setDataMahasiswa] = useState([
    { nim: "101", nama: "Budi Santoso", jurusan: "Teknik Informatika" },
    { nim: "102", nama: "Siti Aminah", jurusan: "Manajemen" },
    { nim: "103", nama: "Rudi Hartono", jurusan: "Teknik Elektro" },
  ]);

  const [form, setForm] = useState({ nim: "", nama: "", jurusan: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nim || !form.nama || !form.jurusan) {
      alert("Semua field harus diisi!");
      return;
    }

    const isExisting = dataMahasiswa.some((mhs) => mhs.nim === form.nim);
    if (isExisting) {
      alert("NIM sudah ada, gunakan NIM yang berbeda!");
      return;
    }

    setDataMahasiswa([...dataMahasiswa, form]);
    setForm({ nim: "", nama: "", jurusan: "" });
  };

  const handleEdit = (nim) => {
    const student = dataMahasiswa.find((item) => item.nim === nim);
    if (!student) {
      alert("Data mahasiswa tidak ditemukan!");
      return;
    }

    const newNama = prompt("Masukkan nama baru:", student.nama);
    const newJurusan = prompt("Masukkan jurusan baru:", student.jurusan);

    if (newNama && newJurusan) {
      const updatedData = dataMahasiswa.map((item) =>
        item.nim === nim ? { ...item, nama: newNama, jurusan: newJurusan } : item
      );
      setDataMahasiswa(updatedData);
    }
  };

  const handleDelete = (nim) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      setDataMahasiswa(dataMahasiswa.filter((mhs) => mhs.nim !== nim));
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Dashboard Admin</h1>
      <form onSubmit={handleSubmit} className="flex gap-4 items-center mb-6">
        <input
          type="text"
          name="nim"
          placeholder="NIM"
          value={form.nim}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-1/4"
          required
        />
        <input
          type="text"
          name="nama"
          placeholder="Nama"
          value={form.nama}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-1/4"
          required
        />
        <input
          type="text"
          name="jurusan"
          placeholder="Jurusan"
          value={form.jurusan}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-1/4"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Tambah
        </button>
      </form>
      <Table data={dataMahasiswa} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Dashboard;
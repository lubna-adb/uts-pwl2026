import { PrismaClient } from '@prisma/client';
// PENTING: Baris ini memastikan file .env terbaca sempurna oleh Bun
import "dotenv/config"; 

const prisma = new PrismaClient();

// LIST - Mengambil semua data
export const getAll = async () => {
  return await prisma.mahasiswa.findMany();
};

// DETAIL - Mengambil 1 data berdasarkan ID
export const getById = async (id) => {
  return await prisma.mahasiswa.findUnique({
    where: { id: parseInt(id) }
  });
};

// CREATE - Menambah data baru
export const create = async (data) => {
  return await prisma.mahasiswa.create({
    data: {
      nama: data.nama,
      nim: data.nim
    }
  });
};

// UPDATE - Mengubah data
export const update = async (id, data) => {
  return await prisma.mahasiswa.update({
    where: { id: parseInt(id) },
    data: {
      nama: data.nama,
      nim: data.nim
    }
  });
};

// DELETE - Menghapus data
export const remove = async (id) => {
  return await prisma.mahasiswa.delete({
    where: { id: parseInt(id) }
  });
};
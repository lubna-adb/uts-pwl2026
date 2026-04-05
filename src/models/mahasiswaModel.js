let mahasiswa = [
  { id: 1, nama: "Budi", nim: "12345" },
];

// GET ALL
export const getAll = () => mahasiswa;

// GET BY ID
export const getById = (id) =>
  mahasiswa.find((m) => m.id == id);

// CREATE
export const create = (data) => {
  const newData = {
    id: Date.now(),
    ...data,
  };
  mahasiswa.push(newData);
};

// UPDATE
export const update = (id, data) => {
  mahasiswa = mahasiswa.map((m) =>
    m.id == id ? { ...m, ...data } : m
  );
};

// DELETE
export const remove = (id) => {
  mahasiswa = mahasiswa.filter((m) => m.id != id);
};
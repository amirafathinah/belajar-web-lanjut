import { Elysia } from "elysia";

const mahasiswa = [
    {
        id: 1,
        nama: "Aliya",
        email: "aliya@example.com",
        jurusan: "Teknik Informatika"
    },
    {
        id: 2,
        nama: "Anisa",
        email: "anisa@example.com",
        jurusan: "Manajemen Bisnis"
    },
    {
        id: 3,
        nama: "Andika",
        email: "andika@example.com",
        jurusan: "Ilmu Komunikasi"
    }
];

export const mahasiswaRoute = new Elysia({
    prefix: "/mahasiswa"
});

// GET 
mahasiswaRoute.get("/:id", ({ params }) => {
    const mahasiswaId = params.id;
    const data = mahasiswa.find(m => m.id === parseInt(mahasiswaId));
    if (data) {
        return data;
    } else {
        return { error: "Mahasiswa tidak ditemukan" };
    }
});

// POST 
mahasiswaRoute.post("/", ({ body }: any) => {
    if (body) {
        return body;
    } else {
        return { error: "Tidak ada data yang masuk" };
    }
});

// PUT 
mahasiswaRoute.put("/:id", ({ params, body }: any) => {
    const id = parseInt(params.id);
    const index = mahasiswa.findIndex(m => m.id === id);

    if (index !== -1) {
        mahasiswa[index] = { id, ...body };
        return { message: "Data berhasil diubah seluruhnya (PUT)", data: mahasiswa[index] };
    }
    return { error: "Mahasiswa tidak ditemukan" };
});

// PATCH 
mahasiswaRoute.patch("/:id", ({ params, body }: any) => {
    const id = parseInt(params.id);
    const index = mahasiswa.findIndex(m => m.id === id);

    if (index !== -1) {
        mahasiswa[index] = { ...mahasiswa[index], ...body };
        return { message: "Data berhasil diperbarui sebagian (PATCH)", data: mahasiswa[index] };
    }
    return { error: "Mahasiswa tidak ditemukan" };
});

// DELETE 
mahasiswaRoute.delete("/:id", ({ params }) => {
    const id = parseInt(params.id);
    const index = mahasiswa.findIndex(m => m.id === id);

    if (index !== -1) {
        const deleted = mahasiswa.splice(index, 1);
        return { message: "Data mahasiswa berhasil dihapus", data: deleted[0] };
    }
    return { error: "Mahasiswa tidak ditemukan" };
});

// CONNECT 
mahasiswaRoute.connect("/", () => {
    return { message: "Koneksi CONNECT berhasil tersambung" };
});

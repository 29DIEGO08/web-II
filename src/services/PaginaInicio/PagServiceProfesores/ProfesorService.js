const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const ProfesorService = {
  async getAll() {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Error al obtener profesores");
    return await res.json();
  },

  async getById(id) {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error("Error al obtener profesor");
    return await res.json();
  },

  async create(data) {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Error al crear profesor");
    return await res.json();
  },

  async update(id, data) {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Error al modificar profesor");
    return await res.json();
  },

  async remove(id) {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Error al eliminar profesor");
  },
};
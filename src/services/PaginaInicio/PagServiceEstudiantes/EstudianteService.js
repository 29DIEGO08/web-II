const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const EstudianteService = {
  async getEstudiantes() {
    const res = await fetch(`${BASE_URL}/api/estudiantes`);
    if (!res.ok) throw new Error("Error al obtener estudiantes");
    return await res.json();
  },

  async getById(id) {
    const res = await fetch(`${backendUrl}/api/estudiantes`);
    if (!res.ok) throw new Error("Error al obtener estudiante");
    return await res.json();
  },

  async create(data) {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Error al crear estudiante");
    return await res.json();
  },

  async modificarEstudiante(id, data) {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Error al modificar estudiante");
    return await res.json();
  },

  async remove(id) {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Error al eliminar estudiante");
  },
};

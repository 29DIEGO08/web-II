// src/services/PaginaInicio/PagServiceEventos/EventoService.js

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

// Opción 2.1: Exportar un objeto EventoService
export const EventoService = {
  getEventos: async function() {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Error al obtener eventos");
    return await res.json();
  },

  getById: async function(id) {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error("Error al obtener evento");
    return await res.json();
  },

  createEvento: async function(data) {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Error al crear evento");
    return await res.json();
  },

  updateEvento: async function(id, data) {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Error al modificar evento");
    return await res.json();
  },

  eliminarEvento: async function(id) {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Error al eliminar evento");
  }
};

// Opcional: Si quieres exportar las funciones individuales también, puedes mantenerlas así:
// export async function getEventos() { ... }

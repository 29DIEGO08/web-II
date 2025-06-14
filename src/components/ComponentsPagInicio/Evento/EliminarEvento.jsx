import React, { useEffect, useState } from "react";
// 1. Ruta corregida para incluir .js
import { EventoService } from "../../../services/PaginaInicio/PagServiceEventos/EventoService.js";
import { useNavigate, useParams } from "react-router-dom";

export default function eliminarEvento() {
  const { id } = useParams();
  const [evento, setEvento] = useState(null);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // 2. Acceso correcto al método getEventos del objeto EventoService
    EventoService.getEventos().then(eventos => {
      const ev = eventos.find(e => e.id.toString() === id);
      if (ev) setEvento(ev);
    }).catch(console.error); // Añadir manejo de error para depuración
  }, [id]);

  async function handleDelete() {
    try {
      // 3. Acceso correcto al método eliminarEvento del objeto EventoService
      await EventoService.eliminarEvento(id);
      setMsg("Evento eliminado correctamente.");
      setTimeout(() => navigate("/eventos/ver"), 1000);
    } catch (error) { // Capturar el error para mostrarlo en consola
      setMsg("Error al eliminar evento");
      console.error("Error al eliminar el evento:", error);
    }
  }

  if (!evento) return <div className="text-center">Cargando...</div>;

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow text-center">
      <h2 className="text-2xl font-bold mb-4">Eliminar Evento</h2>
      <p>¿Seguro que deseas eliminar el evento <b>{evento.nombre}</b>?</p>
      <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded mt-4">Eliminar</button>
      {msg && <p className="mt-2">{msg}</p>}
    </div>
  );
}
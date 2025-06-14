import React, { useState, useEffect } from "react";
import { EventoService } from "../../../services/PaginaInicio/PagServiceEventos/EventoService";
import { useNavigate, useParams } from "react-router-dom";

export default function ModificarEvento() {
  const { id } = useParams();
  const [form, setForm] = useState({
    titulo: "", descripcion: "", fecha: "", lugar: "" , categoria: ""
  });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    EventoService().then(eventos => {
      const ev = eventos.find(e => e.id.toString() === id);
      if (ev) setForm(ev);
    });
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await EventoService(id, form);
      setMsg("Evento modificado correctamente.");
      setTimeout(() => navigate("/eventos/ver"), 1000);
    } catch {
      setMsg("Error al modificar evento");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Modificar Evento</h2>
      {["nombre", "descripcion", "fecha", "lugar", "hora"].map(field => (
        <input
          key={field}
          name={field}
          placeholder={field}
          className="block w-full my-2 p-2 border rounded"
          value={form[field]}
          onChange={handleChange}
          required
        />
      ))}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded mt-2 w-full">Guardar</button>
      {msg && <p className="mt-2 text-center">{msg}</p>}
    </form>
  );
}

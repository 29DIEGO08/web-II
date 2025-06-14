/*import React, { useState, useEffect } from "react";
import { ProfesorService } from "../../../services/PaginaInicio/PagServiceProfesores/ProfesorService";
import { useNavigate, useParams } from "react-router-dom";

export default function ModificarProfesor() {
  const { id } = useParams();
  const [form, setForm] = useState({
    nombre: "", email: "", telefono: ""
  });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    ProfesorService.getAll().then(profesor => {
      const prof = profesor.find(p => p.id.toString() === id);
      if (prof) setForm(prof);
    });
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await ProfesorService.update(id, form);
      setMsg("Profesor modificado correctamente.");
      setTimeout(() => navigate("/profesor/ver"), 1000);
    } catch {
      setMsg("Error al modificar profesor");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Modificar Profesor</h2>
      {["nombre", "email", "telefono"].map(field => (
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
}*/
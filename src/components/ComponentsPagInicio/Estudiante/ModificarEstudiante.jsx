/* import React, { useState, useEffect } from "react";
import { modificarEstudiante, getEstudiantes } from "../../../services/PaginaInicio/PagServiceEstudiantes/EstudianteService.js ";
import { useNavigate, useParams } from "react-router-dom";

export default function ModificarEstudiante() {
  const { id } = useParams();
  const [form, setForm] = useState({
    nombre: "", email: "", matricula: "", grado: "", seccion: "", fechaNacimiento: "", telefono: ""
  });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getEstudiantes().then(estudiantes => {
      const est = estudiantes.find(e => e.id.toString() === id);
      if (est) setForm(est);
    });
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await modificarEstudiante(id, form);
      setMsg("Estudiante modificado correctamente.");
      setTimeout(() => navigate("/estudiantes/ver"), 1000);
    } catch {
      setMsg("Error al modificar estudiante");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Modificar Estudiante</h2>
      {["nombre", "email", "matricula", "grado", "seccion", "fechaNacimiento", "telefono"].map(field => (
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
import React, { useEffect, useState } from "react";
// 1. Ruta corregida para incluir .js y desestructurar los métodos necesarios
import { eliminarEstudiante, getEstudiantes } from "../../../services/PaginaInicio/PagServiceEstudiantes/EstudianteService.js";
import { useNavigate, useParams } from "react-router-dom";

export default function EliminarEstudiante() {
  const { id } = useParams();
  const [estudiante, setEstudiante] = useState(null);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // 2. Acceso correcto al método getEstudiantes (ya está bien en tu código, pero se mantiene la convención)
    getEstudiantes().then(estudiantes => {
      const est = estudiantes.find(e => e.id.toString() === id);
      if (est) setEstudiante(est);
    }).catch(console.error); // Añadir manejo de error para depuración
  }, [id]);

  async function handleDelete() {
    try {
      // 3. Acceso correcto al método eliminarEstudiante (ya está bien en tu código, pero se mantiene la convención)
      await eliminarEstudiante(id);
      setMsg("Estudiante eliminado correctamente.");
      setTimeout(() => navigate("/estudiantes/ver"), 1000);
    } catch (error) { // Capturar el error para mostrarlo en consola
      setMsg("Error al eliminar estudiante");
      console.error("Error al eliminar el estudiante:", error);
    }
  }

  if (!estudiante) return <div className="text-center">Cargando...</div>;

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow text-center">
      <h2 className="text-2xl font-bold mb-4">Eliminar Estudiante</h2>
      <p>¿Seguro que deseas eliminar a <b>{estudiante.nombre}</b>?</p>
      <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded mt-4">Eliminar</button>
      {msg && <p className="mt-2">{msg}</p>}
    </div>
  );
}
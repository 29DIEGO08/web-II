/*import React, { useEffect, useState } from "react";
import { ProfesorService } from "../../../services/PaginaInicio/PagServiceProfesores/ProfesorService";
import { useNavigate, useParams } from "react-router-dom";

export default function EliminarProfesor() {
  const { id } = useParams();
  const [profesor, setProfesor] = useState(null);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    ProfesorService.getAll().then(profesor => {
      const prof = profesor.find(p => p.id.toString() === id);
      if (prof) setProfesor(prof);
    });
  }, [id]);

  async function handleDelete() {
    try {
      await ProfesorService.remove(id);
      setMsg("Profesor eliminado correctamente.");
      setTimeout(() => navigate("/profesor/ver"), 1000);
    } catch {
      setMsg("Error al eliminar profesor");
    }
  }

  if (!profesor) return <div className="text-center">Cargando...</div>;

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow text-center">
      <h2 className="text-2xl font-bold mb-4">Eliminar Profesor</h2>
      <p>¿Seguro que deseas eliminar a <b>{profesor.nombre}</b>?</p>
      <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded mt-4">Eliminar</button>
      {msg && <p className="mt-2">{msg}</p>}
    </div>
  );
}*/
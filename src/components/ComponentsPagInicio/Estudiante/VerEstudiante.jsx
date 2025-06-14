import React, { useEffect, useState } from "react";
import { getEstudiantes } from "../../../services/PaginaInicio/PagServiceEstudiantes/EstudianteService.js";
import { Link } from "react-router-dom";

export default function VerEstudiantes() {
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    getEstudiantes().then(setEstudiantes).catch(console.error);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-fuchsia-700 mb-6">Listado de Estudiantes</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {estudiantes.map(e => (
          <div key={e.id} className="bg-white rounded-lg shadow-md p-5 border-l-4 border-fuchsia-500">
            <h2 className="text-xl font-bold flex gap-2 items-center">
              🧑‍🎓 {e.nombre}
              <span className="text-xs bg-fuchsia-100 rounded px-2">{e.matricula}</span>
            </h2>
            <p>Email: {e.email}</p>
            <p>Grado: {e.grado} - Sección: {e.seccion}</p>
            <p>Nacimiento: {e.fechaNacimiento}</p>
            <p>Tel: {e.telefono}</p>
            <div className="mt-2 flex gap-2">
              <Link to={`/estudiantes/modificar/${e.id}`} className="text-blue-600 hover:underline">Modificar</Link>
              <Link to={`/estudiantes/eliminar/${e.id}`} className="text-red-600 hover:underline">Eliminar</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
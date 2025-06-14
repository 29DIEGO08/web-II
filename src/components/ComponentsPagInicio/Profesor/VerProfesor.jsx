import React, { useEffect, useState } from "react";
import { ProfesorService } from "../../../services/PaginaInicio/PagServiceProfesores/ProfesorService";
import { Link } from "react-router-dom";

export default function VerProfesore() {
  const [profesor, setProfesor] = useState([]);

  useEffect(() => {
    ProfesorService.getAll().then(setProfesor).catch(console.error);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-fuchsia-700 mb-6">Listado de Profesores</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profesor.map(p => (
          <div key={p.id} className="bg-white rounded-lg shadow-md p-5 border-l-4 border-fuchsia-500">
            <h2 className="text-xl font-bold flex gap-2 items-center">
              👨‍🏫 {p.nombre}
            </h2>
            <p>Email: {p.email}</p>
            <p>Tel: {p.telefono}</p>
            <div className="mt-2 flex gap-2">
              <Link to={`/profesor/modificar/${p.id}`} className="text-blue-600 hover:underline">Modificar</Link>
              <Link to={`/profesor/eliminar/${p.id}`} className="text-red-600 hover:underline">Eliminar</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
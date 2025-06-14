import React, { useEffect, useState } from "react";
import { EventoService } from "../../../services/PaginaInicio/PagServiceEventos/EventoService.js";
import { Link } from "react-router-dom";

export default function VerEventos() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    EventoService().then(setEventos).catch(console.error);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-fuchsia-700 mb-6">Listado de Eventos</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventos.map(e => (
          <div key={e.id} className="bg-white rounded-lg shadow-md p-5 border-l-4 border-fuchsia-500">
            <h2 className="text-xl font-bold flex gap-2 items-center">
              📅 {e.nombre}
              <span className="text-xs bg-fuchsia-100 rounded px-2">{e.fecha}</span>
            </h2>
            <p>Descripción: {e.descripcion}</p>
            <p>Lugar: {e.lugar}</p>
            <p>Hora: {e.hora}</p>
            <div className="mt-2 flex gap-2">
              <Link to={`/eventos/modificar/${e.id}`} className="text-blue-600 hover:underline">Modificar</Link>
              <Link to={`/eventos/eliminar/${e.id}`} className="text-red-600 hover:underline">Eliminar</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
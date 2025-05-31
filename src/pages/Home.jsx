import { useState } from "react";

const eventos = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Evento de Fotografía",
    date: "2025-05-18",
    descripcion: "Un evento dedicado a la fotografía de naturaleza.",
    categoria: "Arte",
  },
  {
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "Taller de Pintura",
    date: "2025-06-10",
    descripcion: "Taller introductorio a la pintura acrílica.",
    categoria: "Arte",
  },
  // ...más eventos
];

export default function Home() {
  return (
    <section>
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-2 text-blue-700">Eventos Escolares 2025</h1>
        <p className="text-lg text-gray-500">¡Participa, aprende y disfruta!</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {eventos.map((evento, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <img src={evento.image} alt={evento.title} className="h-48 w-full object-cover rounded-t-xl" />
            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-1">{evento.title}</h2>
              <p className="text-gray-400 mb-1">{evento.date}</p>
              <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded mb-2">{evento.categoria}</span>
              <p className="text-gray-600">{evento.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
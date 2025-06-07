import { useState } from "react";

const eventos = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Evento de Fotografía",
    date: "2025-05-18",
    descripcion: "Un evento dedicado a la fotografía de naturaleza.",
    categoria: "Arte",
    detalles: "Se llevará a cabo en el parque central. Incluye taller de fotografía, concurso y premios para los mejores trabajos.",
  },
  {
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "Taller de Pintura",
    date: "2025-06-10",
    descripcion: "Taller introductorio a la pintura acrílica.",
    categoria: "Arte",
    detalles: "Incluye materiales y guía de un artista local. Requiere inscripción previa.",
  },
  // ...más eventos
];

export default function Home() {
  const [selectedEvento, setSelectedEvento] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    grado: "",
    grupo: "",
    edad: "",
    motivo: "",
  });

  const isModalOpen = !!selectedEvento;

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías enviar la petición a una API o backend
    alert("¡Petición enviada!");
    setShowForm(false);
    setSelectedEvento(null);
    setForm({
      nombre: "",
      grado: "",
      grupo: "",
      edad: "",
      motivo: "",
    });
  };

  return (
    <section className="relative">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-2 text-blue-700">Eventos Escolares 2025</h1>
        <p className="text-lg text-gray-500">¡Participa, aprende y disfruta!</p>
      </div>
      {/* Aplica desenfoque al fondo si el modal está abierto */}
      <div className={isModalOpen ? "pointer-events-none filter blur-md transition duration-300" : "transition duration-300"}>
        <div className="grid md:grid-cols-3 gap-8">
          {eventos.map((evento, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer"
              onClick={() => { setSelectedEvento(evento); setShowForm(false); }}
            >
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
      </div>

      {/* Modal o sección de detalles */}
      {selectedEvento && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg relative animate-fade-in">
            <button 
              onClick={() => setSelectedEvento(null)} 
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-3xl transition">
              &times;
            </button>
            <img src={selectedEvento.image} alt={selectedEvento.title} className="h-48 w-full object-cover rounded-xl mb-4 shadow" />
            <h2 className="text-3xl font-bold mb-2 text-blue-700">{selectedEvento.title}</h2>
            <p className="text-gray-400 mb-1">{selectedEvento.date}</p>
            <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded mb-2">{selectedEvento.categoria}</span>
            <p className="text-gray-600 mb-2">{selectedEvento.descripcion}</p>
            <p className="text-gray-800 mb-4">{selectedEvento.detalles}</p>
            {!showForm && (
              <button
                className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:from-blue-700 hover:to-blue-500 hover:scale-105 transition"
                onClick={() => setShowForm(true)}
              >
                Quiero participar
              </button>
            )}
            {showForm && (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-xl p-6 shadow">
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-blue-700 mb-1">Nombre completo</label>
                    <input
                      name="nombre"
                      required
                      type="text"
                      placeholder="Ej: Juan Pérez"
                      className="w-full border-2 border-blue-200 rounded-lg p-2 focus:border-blue-400 outline-none"
                      value={form.nombre}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-1/4">
                    <label className="block text-sm font-medium text-blue-700 mb-1">Grado</label>
                    <input
                      name="grado"
                      required
                      type="text"
                      placeholder="Ej: 3°"
                      className="w-full border-2 border-blue-200 rounded-lg p-2 focus:border-blue-400 outline-none"
                      value={form.grado}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-1/4">
                    <label className="block text-sm font-medium text-blue-700 mb-1">Grupo</label>
                    <input
                      name="grupo"
                      required
                      type="text"
                      placeholder="Ej: B"
                      className="w-full border-2 border-blue-200 rounded-lg p-2 focus:border-blue-400 outline-none"
                      value={form.grupo}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-blue-700 mb-1">Edad</label>
                    <input
                      name="edad"
                      required
                      type="number"
                      min={5}
                      placeholder="Ej: 15"
                      className="w-full border-2 border-blue-200 rounded-lg p-2 focus:border-blue-400 outline-none"
                      value={form.edad}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-blue-700 mb-1">¿Por qué quieres participar?</label>
                    <textarea
                      name="motivo"
                      required
                      placeholder="Cuéntanos tus motivos..."
                      className="w-full border-2 border-blue-200 rounded-lg p-2 focus:border-blue-400 outline-none resize-none"
                      rows={2}
                      value={form.motivo}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-400 text-white py-3 rounded-lg font-bold hover:from-blue-700 hover:to-blue-500 shadow-md hover:scale-105 transition"
                >
                  Enviar petición
                </button>
              </form>
            )}
          </div>
        </div>
      )}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.97);}
          to { opacity: 1; transform: scale(1);}
        }
        .animate-fade-in {
          animation: fade-in 0.35s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </section>
  );
}
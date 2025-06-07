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
    <section className="custom-bg:#eaf1ff relative min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pb-20">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text drop-shadow">
          🎊 Eventos Escolares 2025
        </h1>
        <p className="text-xl text-gray-500 font-medium">¡Participa, aprende y disfruta!</p>
      </div>
      <div className={isModalOpen ? "pointer-events-none filter blur-md transition duration-300" : "transition duration-300"}>
        <div className="grid md:grid-cols-3 gap-10 px-6">
          {eventos.map((evento, idx) => (
            <div
              key={idx}
              className="relative group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105 cursor-pointer overflow-hidden border-4 border-transparent hover:border-blue-200"
              onClick={() => { setSelectedEvento(evento); setShowForm(false); }}
            >
              <img src={evento.image} alt={evento.title} className="h-52 w-full object-cover group-hover:scale-110 transition rounded-t-3xl" />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-1 text-blue-700 group-hover:underline">{evento.title}</h2>
                <p className="text-gray-400 mb-1 flex items-center gap-1"><span role="img" aria-label="date">📅</span>{evento.date}</p>
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-blue-700 rounded-full mb-2 shadow-sm">
                  {evento.categoria}
                </span>
                <p className="text-gray-600">{evento.descripcion}</p>
              </div>
              <div className="absolute top-4 right-4 bg-white bg-opacity-80 rounded-full px-3 py-1 text-blue-500 font-bold text-xs shadow">
                NUEVO
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedEvento && (
        <div className="fixed inset-0 backdrop-blur-md bg-white/20 flex justify-center items-center z-50">
          <div className="bg-gradient-to-br from-white via-blue-50 to-pink-50 rounded-3xl shadow-2xl p-10 w-full max-w-xl relative animate-fade-in border-4 border-blue-200">
            <button 
              onClick={() => setSelectedEvento(null)} 
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-4xl transition font-bold rounded-full bg-white bg-opacity-60 px-3 pb-1">
              &times;
            </button>
            <img src={selectedEvento.image} alt={selectedEvento.title} className="h-56 w-full object-cover rounded-2xl mb-6 shadow-lg" />
            <h2 className="text-3xl font-extrabold mb-2 text-blue-700">{selectedEvento.title}</h2>
            <p className="text-gray-400 mb-1 flex items-center gap-1"><span role="img" aria-label="date">📅</span>{selectedEvento.date}</p>
            <span className="inline-block px-4 py-1 text-sm bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-blue-700 rounded-full mb-2 shadow">
              {selectedEvento.categoria}
            </span>
            <p className="text-gray-600 mb-2">{selectedEvento.descripcion}</p>
            <p className="text-gray-800 mb-5">{selectedEvento.detalles}</p>
            {!showForm && (
              <button
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-10 py-3 rounded-xl font-bold shadow-xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-600 hover:scale-105 transition text-lg mt-2"
                onClick={() => setShowForm(true)}
              >
                ✨ Quiero participar
              </button>
            )}
            {showForm && (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4 bg-gradient-to-br from-blue-50 via-white to-pink-50 rounded-2xl p-6 shadow-xl border-2 border-blue-100">
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block text-sm font-bold text-blue-700 mb-1">Nombre completo</label>
                    <input
                      name="nombre"
                      required
                      type="text"
                      placeholder="Ej: Juan Pérez"
                      className="w-full border-2 border-blue-200 rounded-lg p-2 focus:border-blue-400 outline-none bg-white"
                      value={form.nombre}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-1/4">
                    <label className="block text-sm font-bold text-blue-700 mb-1">Grado</label>
                    <input
                      name="grado"
                      required
                      type="text"
                      placeholder="Ej: 3°"
                      className="w-full border-2 border-blue-200 rounded-lg p-2 focus:border-blue-400 outline-none bg-white"
                      value={form.grado}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-1/4">
                    <label className="block text-sm font-bold text-blue-700 mb-1">Grupo</label>
                    <input
                      name="grupo"
                      required
                      type="text"
                      placeholder="Ej: B"
                      className="w-full border-2 border-blue-200 rounded-lg p-2 focus:border-blue-400 outline-none bg-white"
                      value={form.grupo}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block text-sm font-bold text-blue-700 mb-1">Edad</label>
                    <input
                      name="edad"
                      required
                      type="number"
                      min={5}
                      placeholder="Ej: 15"
                      className="w-full border-2 border-blue-200 rounded-lg p-2 focus:border-blue-400 outline-none bg-white"
                      value={form.edad}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm font-bold text-blue-700 mb-1">¿Por qué quieres participar?</label>
                    <textarea
                      name="motivo"
                      required
                      placeholder="Cuéntanos tus motivos..."
                      className="w-full border-2 border-blue-200 rounded-lg p-2 focus:border-blue-400 outline-none resize-none bg-white"
                      rows={2}
                      value={form.motivo}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 text-white py-3 rounded-xl font-extrabold hover:from-blue-700 hover:via-purple-700 hover:to-pink-600 shadow-xl hover:scale-105 transition text-lg"
                >
                  🚀 Enviar petición
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
import { useState } from "react";

export default function CrearEvento() {
  const [form, setForm] = useState({
    titulo: "",
    descripcion: "",
    fecha: "",
    lugar: "",
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://eventos-25.onrender.com/api/eventos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setMensaje("¡Evento creado exitosamente!");
        setForm({
          titulo: "",
          descripcion: "",
          fecha: "",
          lugar: "",
        });
      } else {
        setMensaje("Hubo un error al crear el evento.");
      }
    } catch (error) {
      setMensaje("No se pudo conectar con el backend.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-10 rounded-3xl shadow-2xl border border-blue-200">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 drop-shadow-lg">Crear Evento</h1>
      <form onSubmit={handleSubmit} className="space-y-7">
        <div>
          <label className="block font-semibold mb-2 text-blue-700" htmlFor="titulo">
            <span className="inline-block align-middle mr-1">🎉</span>Título
          </label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            className="w-full border-2 border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white transition placeholder-gray-400 shadow"
            required
            placeholder="¿Cómo se llama tu evento?"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2 text-purple-700" htmlFor="descripcion">
            <span className="inline-block align-middle mr-1">📝</span>Descripción
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            className="w-full border-2 border-purple-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white transition placeholder-gray-400 shadow"
            required
            rows={3}
            placeholder="Describe tu evento..."
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block font-semibold mb-2 text-pink-700" htmlFor="fecha">
              <span className="inline-block align-middle mr-1">📅</span>Fecha
            </label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              value={form.fecha}
              onChange={handleChange}
              className="w-full border-2 border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white transition shadow"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block font-semibold mb-2 text-yellow-700" htmlFor="lugar">
              <span className="inline-block align-middle mr-1">📍</span>Lugar
            </label>
            <input
              type="text"
              id="lugar"
              name="lugar"
              value={form.lugar}
              onChange={handleChange}
              className="w-full border-2 border-yellow-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white transition placeholder-gray-400 shadow"
              required
              placeholder="¿Dónde será?"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-extrabold rounded-xl shadow-lg hover:scale-105 hover:shadow-pink-200 transition transform duration-200"
        >
          Crear evento
        </button>
        {mensaje && (
          <p className="text-green-700 bg-green-100 rounded-lg text-center py-2 mt-5 shadow font-semibold animate-fade-in">
            {mensaje}
          </p>
        )}
      </form>
      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 0.7s;
        }
      `}</style>
    </div>
  );
}
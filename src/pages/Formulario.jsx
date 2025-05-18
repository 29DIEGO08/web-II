import { useState } from "react";

export default function Formulario() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    edad: "",
    grado: "",
    grupo: "",
    motivo: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar el formulario a una API o hacer lo que necesites
    alert("¡Formulario enviado!");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Formulario de Participación</h2>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Correo</label>
          <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4 flex gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-semibold">Edad</label>
            <input
              type="number"
              name="edad"
              value={form.edad}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-semibold">Grado</label>
            <input
              type="text"
              name="grado"
              value={form.grado}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-semibold">Grupo</label>
            <input
              type="text"
              name="grupo"
              value={form.grupo}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-semibold">¿Por qué quieres participar en el evento?</label>
          <textarea
            name="motivo"
            value={form.motivo}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
            rows={3}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
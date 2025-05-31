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

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Formulario enviado!");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Formulario de Participación</h2>
        {["nombre", "correo", "edad", "grado", "grupo"].map((campo, idx) => (
          <div className="mb-4" key={idx}>
            <label className="block mb-1 font-semibold capitalize">{campo}</label>
            <input
              type={campo === "correo" ? "email" : campo === "edad" ? "number" : "text"}
              name={campo}
              value={form[campo]}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
        ))}
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
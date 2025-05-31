import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirm) {
      setError("Las contraseñas no coinciden");
    } else if (!correo || !password) {
      setError("Completa todos los campos");
    } else {
      // Aquí podrías agregar lógica real de registro
      navigate("/login");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Registro</h2>
        {error && <p className="text-red-500 mb-3 text-center">{error}</p>}
        <input
          type="email"
          className="w-full border border-gray-300 rounded-xl px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-200"
          placeholder="Correo"
          value={correo}
          onChange={e => setCorreo(e.target.value)}
        />
        <input
          type="password"
          className="w-full border border-gray-300 rounded-xl px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-200"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="w-full border border-gray-300 rounded-xl px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-200"
          placeholder="Confirmar Contraseña"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold transition shadow"
        >
          Registrarse
        </button>
        <div className="mt-4 text-center">
          <a href="/login" className="text-blue-500 underline hover:text-blue-700 text-sm">¿Ya tienes cuenta? Inicia sesión</a>
        </div>
      </form>
    </div>
  );
}
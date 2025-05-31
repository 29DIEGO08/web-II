import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// Simulación de usuarios registrados
const USUARIOS_PRUEBA = [
  { correo: "admin@admin.com", password: "admin", role: "admin" },
  { correo: "usuario@usuario.com", password: "user", role: "user" }
];

export default function Login() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Buscar el usuario en la "base de datos"
    const userFound = USUARIOS_PRUEBA.find(
      (u) => u.correo === correo && u.password === password
    );
    if (userFound) {
      login({ correo: userFound.correo, role: userFound.role });
      if (userFound.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } else {
      setError("Datos incorrectos");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Iniciar Sesión</h2>
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
          className="w-full border border-gray-300 rounded-xl px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-200"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold transition shadow"
        >
          Entrar
        </button>
        <div className="mt-4 text-center">
          <a href="/register" className="text-blue-500 underline hover:text-blue-700 text-sm">¿No tienes cuenta? Regístrate</a>
        </div>
        <div className="mt-6 text-xs text-gray-500">
          <strong>Prueba:</strong><br/>
          Admin: admin@admin.com / admin<br/>
          Usuario: usuario@usuario.com / usuario
        </div>
      </form>
    </div>
  );
}
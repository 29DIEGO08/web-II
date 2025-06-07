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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <form
        onSubmit={handleSubmit}
        className="relative bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md border-t-8 border-blue-300 animate-fade-in"
      >
        <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 w-24 h-24 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
            <span className="text-4xl">🔑</span>
          </div>
        </div>
        <h2 className="text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text drop-shadow">
          Iniciar Sesión
        </h2>
        {error && (
          <p className="text-red-600 mb-3 text-center font-semibold animate-shake">
            {error}
          </p>
        )}
        <input
          type="email"
          className="w-full border-2 border-blue-100 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-inner bg-blue-50 placeholder-gray-400"
          placeholder="Correo"
          value={correo}
          onChange={e => setCorreo(e.target.value)}
        />
        <input
          type="password"
          className="w-full border-2 border-blue-100 rounded-xl px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-inner bg-blue-50 placeholder-gray-400"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white py-3 rounded-xl font-extrabold transition shadow-lg hover:scale-105 text-lg"
        >
          Entrar
        </button>
        <div className="mt-5 text-center">
          <a
            href="/register"
            className="text-blue-500 underline hover:text-blue-700 text-sm font-medium transition"
          >
            ¿No tienes cuenta? Regístrate
          </a>
        </div>
        <div className="mt-8 text-xs text-gray-500 bg-blue-50 p-3 rounded-lg shadow-inner">
          <strong className="block text-gray-700 mb-1">Prueba de acceso:</strong>
          <span className="inline-block mb-1">Admin: <b>admin@admin.com</b> / <b>admin</b></span><br />
          <span className="inline-block">Usuario: <b>usuario@usuario.com</b> / <b>usuario</b></span>
        </div>
        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 0.7s;
          }
          @keyframes shake {
            0% { transform: translateX(0); }
            20% { transform: translateX(-8px);}
            40% { transform: translateX(8px);}
            60% { transform: translateX(-6px);}
            80% { transform: translateX(6px);}
            100% { transform: translateX(0);}
          }
          .animate-shake {
            animation: shake 0.4s;
          }
        `}</style>
      </form>
    </div>
  );
}
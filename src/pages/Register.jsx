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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <form 
        onSubmit={handleSubmit} 
        className="relative bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md border-t-8 border-pink-300 animate-fade-in"
      >
        <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-br from-blue-200 via-pink-200 to-purple-200 w-24 h-24 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
            <span className="text-4xl">📝</span>
          </div>
        </div>
        <h2 className="text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-transparent bg-clip-text drop-shadow">
          Registro
        </h2>
        {error && (
          <p className="text-red-600 mb-3 text-center font-semibold animate-shake">
            {error}
          </p>
        )}
        <input
          type="email"
          className="w-full border-2 border-pink-100 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-300 shadow-inner bg-pink-50 placeholder-gray-400"
          placeholder="Correo"
          value={correo}
          onChange={e => setCorreo(e.target.value)}
        />
        <input
          type="password"
          className="w-full border-2 border-pink-100 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-300 shadow-inner bg-pink-50 placeholder-gray-400"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="w-full border-2 border-pink-100 rounded-xl px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-pink-300 shadow-inner bg-pink-50 placeholder-gray-400"
          placeholder="Confirmar Contraseña"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-700 hover:via-purple-700 hover:to-blue-700 text-white py-3 rounded-xl font-extrabold transition shadow-lg hover:scale-105 text-lg"
        >
          Registrarse
        </button>
        <div className="mt-5 text-center">
          <a href="/login" className="text-pink-500 underline hover:text-pink-700 text-sm font-medium transition">
            ¿Ya tienes cuenta? Inicia sesión
          </a>
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
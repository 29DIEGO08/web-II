import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
  return (
    <div className="Login">
      <AuthForm />
    </div>
  );
}

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  // Muestra el modal con mensaje
  const showMessageBox = (msg) => {
    setMessage(msg);
    setShowModal(true);
  };

  const closeMessageBox = () => {
    setShowModal(false);
    setMessage('');
  };

  // LOGIN: Consulta estudiante por correo y simula autenticación
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setShowModal(false);

  try {
    // Llama al endpoint de login del backend
    const res = await fetch(`http://localhost:8080/api/estudiantes/login?correo=${loginEmail}&contrasena=${loginPassword}`);
    if (!res.ok) throw new Error("Correo o contraseña incorrectos");
    const estudiante = await res.json();

    showMessageBox('¡Inicio de sesión exitoso! Redirigiendo...');
    setTimeout(() => navigate("/AdminPanel"), 1500);
  } catch (error) {
    showMessageBox(error.message || 'Error al iniciar sesión');
  } finally {
    setLoading(false);
  }
};
  

  // ...el resto de tu código (registro, UI, etc.) permanece igual...

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-inter">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
        </h2>
        {isLogin ? (
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-6">
              <label htmlFor="emailLogin" className="block text-gray-700 text-sm font-semibold mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="emailLogin"
                className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                placeholder="tu@ejemplo.com"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className="mb-8">
              <label htmlFor="passwordLogin" className="block text-gray-700 text-sm font-semibold mb-2">
                Contraseña
              </label>
              <input
                type="password"
                id="passwordLogin"
                className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                placeholder="********"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 w-full text-lg flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : 'Iniciar Sesión'}
            </button>
          </form>
        ) : (
          // ...tu formulario de registro igual que antes...
          <div> {/* Aquí va tu formulario de registro */} </div>
        )}

        <div className="mt-8 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:text-blue-800 text-base font-medium transition duration-200"
            disabled={loading}
          >
            {isLogin
              ? '¿No tienes una cuenta? Regístrate aquí.'
              : '¿Ya tienes una cuenta? Inicia sesión aquí.'}
          </button>
        </div>
      </div>

      {/* Custom Message Box Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center border-t-4 border-blue-500">
            <p className="text-gray-800 text-lg font-semibold mb-4">{message}</p>
            <button
              onClick={closeMessageBox}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function MenuLateral() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const buttonStyle = ({ isActive }) =>
    `block w-40 text-base py-3 mb-4 rounded-lg font-semibold transition text-center border
    ${isActive ? "border-blue-500 bg-blue-100 shadow" : "border-gray-300 bg-white hover:bg-blue-50 hover:shadow-lg hover:scale-105 hover:border-blue-400"}`;

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <aside className="w-64 min-h-screen border-r border-gray-200 flex flex-col items-center pt-10 bg-gray-50">
      <img
        src="/assets/perfil.png"
        alt="Imagen de perfil"
        className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 shadow-lg mb-5"
      />
      <NavLink to="/" className="mb-8 text-3xl font-bold text-gray-700 hover:text-blue-600 transition">Inicio</NavLink>
      {user?.role === "user" && (
        <>
          <NavLink to="/participaciones" className={buttonStyle}>Participaciones</NavLink>
          <NavLink to="/acercade" className={buttonStyle}>Acerca de</NavLink>
        </>
      )}
      {user?.role === "admin" && (
        <>
          <NavLink to="/admin/dashboard" className={buttonStyle}>Panel Admin</NavLink>
          <NavLink to="/acercade" className={buttonStyle}>Acerca de</NavLink>
        </>
      )}
      <button
        onClick={handleLogout}
        className="mt-auto mb-16 px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded shadow font-bold"
      >
        Cerrar sesión
      </button>
    </aside>
  );
}
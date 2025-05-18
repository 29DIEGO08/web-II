import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function MenuLateral() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const buttonStyle = ({ isActive }) =>
    `block w-40 text-base py-3 mb-6 rounded-lg font-semibold text-gray-800 transition
    text-center border
    ${isActive 
      ? "border-blue-500 bg-blue-100 shadow"
      : "border-gray-300 bg-white hover:bg-blue-50 hover:shadow-lg hover:scale-105 hover:border-blue-400"}
    `;

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <aside className="w-64 min-h-screen border-r border-gray-200 flex flex-col items-center pt-10 bg-gray-50">
      <img
        src="src/assets/descarga.png"
        alt="Imagen de perfil"
        className="w-40 h-40 rounded-full object-cover border-4 border-blue-200 shadow-lg mt-4 mb-4"
      />
      <NavLink 
        to="/" 
        className="mb-14 text-4xl font-marker text-gray-700 hover:text-blue-600 transition cursor-pointer"
        style={{ textDecoration: "none" }}
      >
        Home
      </NavLink>
      <NavLink to="/participaciones" className={buttonStyle}>
        Participaciones
      </NavLink>
      <NavLink to="/acercade" className={buttonStyle}>
        Acerca de
      </NavLink>

      

      <button
        className="w-40 text-base py-3 mt-10 rounded-lg font-semibold border border-gray-300 bg-white text-gray-700
        hover:bg-red-50 hover:text-red-600 hover:border-red-400 hover:shadow-lg hover:scale-105 transition"
        onClick={handleLogout}
      >
        Cerrar sesión
      </button>
    </aside>
  );
}
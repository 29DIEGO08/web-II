import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Layout from "../pages/Layout";
import AcercaDe from "../pages/AcercaDe";
import Formulario from "../pages/paginasExclusivasUsuario/Formulario";
import Participaciones from "../pages/paginasExclusivasUsuario/Participaciones";
import CrearEvento from "../pages/páginasExclusivasAdmin/CrearEvento";
import Error404 from "../pages/Error404";

function AdminDashboard() {
  return <div className="p-8 text-2xl font-bold text-blue-700">¡Bienvenido Administrador!</div>;
}

function UserHome() {
  return <div className="p-8 text-2xl font-bold text-green-700">¡Bienvenido Usuario!</div>;
}

export default function AppRoutes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route path="/" element={<Home />} />
            <Route path="/admin/crear-evento" element={<CrearEvento/>}/>
            <Route path="/participaciones" element={<Participaciones />} />
            <Route path="/acercade" element={<AcercaDe />} />
            <Route path="/formulario" element={<Formulario />} />
            <Route path="/user/home" element={<UserHome />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
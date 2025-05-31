import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Participaciones from "./pages/paginasExclusivasUsuario/Participaciones";
import AcercaDe from "./pages/AcercaDe";
import Formulario from "./pages/paginasExclusivasUsuario/Formulario";

function AdminDashboard() {
  return <div className="p-8">¡Bienvenido Administrador!</div>;
}

function UserHome() {
  return <div className="p-8">¡Bienvenido Usuario!</div>;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/participaciones" element={<Participaciones />} />
            <Route path="/acercade" element={<AcercaDe />} />
            <Route path="/formulario" element={<Formulario />} /> 
            <Route path="/user/home" element={<UserHome />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
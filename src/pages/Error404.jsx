import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-extrabold text-blue-700 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Página no encontrada.</p>
      <Link to="/" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition">Ir al inicio</Link>
    </div>
  );
}
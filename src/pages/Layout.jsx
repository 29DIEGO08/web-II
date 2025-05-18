import MenuLateral from "../components/MenuLateral";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-white border-2 border-black">
      <MenuLateral />
      <main className="flex-1">
    <Outlet /> {/* Aquí se renderiza <Home /> u otra página */}
  </main>
    </div>
  );
}
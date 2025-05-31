import { Outlet } from "react-router-dom";
import MenuLateral from "../components/MenuLateral";

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-neutral-100">
      <MenuLateral />
      <main className="flex-1 ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
}
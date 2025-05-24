import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (correo, password) => {
    if (correo === "admin@gmail.com" && password === "admin") {
      setUser({ correo, role: "admin" });
      return { success: true, role: "admin" };
    } else if (correo === "usuario@gmail.com" && password === "user") {
      setUser({ correo, role: "user" });
      return { success: true, role: "user" };
    } else {
      setUser(null);
      return { success: false };
    }
  };


  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
}
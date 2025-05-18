import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (username, password) => {
    if (username && password) {
      setUser({ username });
      localStorage.setItem("user", JSON.stringify({ username }));
      return true;
    }
    return false;
  };

  const register = (username, password) => {
    if (username && password) {
      setUser({ username });
      localStorage.setItem("user", JSON.stringify({ username }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
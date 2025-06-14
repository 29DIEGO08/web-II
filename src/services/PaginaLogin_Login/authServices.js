export function login(email, password) {
  // Usuario hardcodeado para ejemplo
  const user = { email: "admin@demo.com", password: "1234" };
  if (email === user.email && password === user.password) {
    localStorage.setItem("loggedIn", "true");
    return Promise.resolve();
  } else {
    return Promise.reject("Credenciales incorrectas");
  }
}

export function logout() {
  localStorage.removeItem("loggedIn");
}

export function isLoggedIn() {
  return localStorage.getItem("loggedIn") === "true";
}
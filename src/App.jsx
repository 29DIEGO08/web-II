// App.tsx
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import AdminPanel from './pages/PaginaInicio';




const App = () => {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute></ProtectedRoute>}>
              <Route path="/AdminPanel" element={< AdminPanel/>} />
            </Route>
          </Routes>
        </BrowserRouter>
  );
};

export default App;
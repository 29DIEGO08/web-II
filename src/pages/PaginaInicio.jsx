import React, { useState } from 'react';
import CrearEvento from '../components/ComponentsPagInicio/Evento/CrearEvento';
import EliminarEvento from '../components/ComponentsPagInicio/Evento/EliminarEvento';
import ModificarEvento from '../components/ComponentsPagInicio/Evento/ModificarEvento';
import VerEvento from '../components/ComponentsPagInicio/Evento/VerEvento';
import CrearEstudiante from '../components/ComponentsPagInicio/Estudiante/CrearEstudiante';
import EliminarEstudiante from '../components/ComponentsPagInicio/Estudiante/EliminarEstudiante'; // <-- Esta es la línea 7
import ModificarEstudiante from '../components/ComponentsPagInicio/Estudiante/ModificarEstudiante';
import VerEstudiante from '../components/ComponentsPagInicio/Estudiante/VerEstudiante';
import CrearProfesor from '../components/ComponentsPagInicio/Profesor/CrearProfesor';
import EliminarProfesor from '../components/ComponentsPagInicio/Profesor/EliminarProfesor';
import ModificarProfesor from '../components/ComponentsPagInicio/Profesor/ModificarProfesor';
import VerProfesor from '../components/ComponentsPagInicio/Profesor/VerProfesor';


const WelcomeContent = () => (
  <div className="p-6 bg-gray-50 rounded-lg shadow-md animate-fade-in text-center">
    <h2 className="text-3xl font-extrabold text-gray-800 mb-4">¡Bienvenido al Panel de Gestión!</h2>
    <p className="text-lg text-gray-600 mb-2">Selecciona una opción del menú lateral para empezar.</p>
    <p className="text-gray-500">Aquí podrás gestionar Eventos, Estudiantes y Profesores.</p>
  </div>
);


// --- Componente Principal de la Aplicación ---
function AdminPanel() {
  // Estado para controlar qué submenú está expandido
  const [expandedMenu, setExpandedMenu] = useState(null); // 'evento', 'estudiante', 'profesor'

  // Estado para controlar qué opción (incluyendo subopciones) está seleccionada
  const [selectedOption, setSelectedOption] = useState(null); // Ej: 'evento-agregar', 'estudiante-ver'

  // Función para manejar el clic en una opción principal
  const handleMainMenuClick = (menuName) => {
    // Si ya está expandido, lo contrae; si no, lo expande
    setExpandedMenu(expandedMenu === menuName ? null : menuName);
    // Al hacer clic en el menú principal, se deselecciona cualquier subopción
    setSelectedOption(null);
  };

  // Función para manejar el clic en una subopción
  const handleSubMenuClick = (optionName) => {
    setSelectedOption(optionName);
  };

  // Función para renderizar el componente de contenido según la opción seleccionada
  const renderContentComponent = () => {
    switch (selectedOption) {
      case 'evento-agregar':
        return <CrearEvento />;
      case 'evento-eliminar':
        return <EliminarEvento />;
      case 'evento-modificar':
        return <ModificarEvento />;
      case 'evento-ver':
        return <VerEvento />;
      case 'estudiante-agregar':
        return <CrearEstudiante />;
      case 'estudiante-eliminar':
        return <EliminarEstudiante />;
      case 'estudiante-modificar':
        return <ModificarEstudiante />;
      case 'estudiante-ver':
        return <VerEstudiante />;
      case 'profesor-agregar':
        return <CrearProfesor />;
      case 'profesor-eliminar':
        return <EliminarProfesor />;
      case 'profesor-modificar':
        return <ModificarProfesor />;
      case 'profesor-ver':
        return <VerProfesor />;
      default:
        return <WelcomeContent />; // Contenido de bienvenida por defecto
    }
  };

  // Estilos CSS personalizados para las animaciones y transiciones
  const customStyles = `
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fade-in 0.5s ease-out forwards;
    }

    /* Estilo para las flechas del menú */
    .arrow-icon {
      transition: transform 0.3s ease-in-out;
    }
    .arrow-icon.rotated {
      transform: rotate(90deg);
    }
  `;

  return (
    <div className="flex min-h-screen font-inter bg-gray-100">
      {/* Añadir estilos personalizados */}
      <style>{customStyles}</style>

      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-br from-indigo-800 to-indigo-900 text-white shadow-lg p-6 rounded-r-lg flex flex-col">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-indigo-100 tracking-wide">
          Panel de Gestión
        </h1>

        <nav className="flex-1">
          {/* Opción 1: Evento */}
          <div className="mb-4">
            <button
              onClick={() => handleMainMenuClick('evento')}
              className="w-full flex items-center justify-between p-3 rounded-md transition-all duration-300 ease-in-out
                          hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75
                          text-lg font-medium text-indigo-100 group"
            >
              <span className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-indigo-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                Evento
              </span>
              <span className={`arrow-icon ${expandedMenu === 'evento' ? 'rotated' : ''}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </span>
            </button>
            {expandedMenu === 'evento' && (
              <ul className="pl-6 pt-2 space-y-2 animate-fade-in">
                <li>
                  <button
                    onClick={() => handleSubMenuClick('evento-agregar')}
                    className={`w-full text-left p-2 rounded-md text-sm transition duration-200
                                 ${selectedOption === 'evento-agregar' ? 'bg-indigo-600 text-white shadow-inner' : 'hover:bg-indigo-700 text-indigo-200 hover:text-white'}`}
                  >
                    Agregar
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSubMenuClick('evento-eliminar')}
                    className={`w-full text-left p-2 rounded-md text-sm transition duration-200
                                 ${selectedOption === 'evento-eliminar' ? 'bg-indigo-600 text-white shadow-inner' : 'hover:bg-indigo-700 text-indigo-200 hover:text-white'}`}
                  >
                    Eliminar
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSubMenuClick('evento-modificar')}
                    className={`w-full text-left p-2 rounded-md text-sm transition duration-200
                                 ${selectedOption === 'evento-modificar' ? 'bg-indigo-600 text-white shadow-inner' : 'hover:bg-indigo-700 text-indigo-200 hover:text-white'}`}
                  >
                    Modificar
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSubMenuClick('evento-ver')}
                    className={`w-full text-left p-2 rounded-md text-sm transition duration-200
                                 ${selectedOption === 'evento-ver' ? 'bg-indigo-600 text-white shadow-inner' : 'hover:bg-indigo-700 text-indigo-200 hover:text-white'}`}
                  >
                    Ver
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* Opción 2: Estudiante */}
          <div className="mb-4">
            <button
              onClick={() => handleMainMenuClick('estudiante')}
              className="w-full flex items-center justify-between p-3 rounded-md transition-all duration-300 ease-in-out
                          hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75
                          text-lg font-medium text-indigo-100 group"
            >
              <span className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-indigo-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
                Estudiante
              </span>
              <span className={`arrow-icon ${expandedMenu === 'estudiante' ? 'rotated' : ''}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </span>
            </button>
            {expandedMenu === 'estudiante' && (
              <ul className="pl-6 pt-2 space-y-2 animate-fade-in">
                <li>
                  <button
                    onClick={() => handleSubMenuClick('estudiante-agregar')}
                    className={`w-full text-left p-2 rounded-md text-sm transition duration-200
                                 ${selectedOption === 'estudiante-agregar' ? 'bg-indigo-600 text-white shadow-inner' : 'hover:bg-indigo-700 text-indigo-200 hover:text-white'}`}
                  >
                    Agregar
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSubMenuClick('estudiante-eliminar')}
                    className={`w-full text-left p-2 rounded-md text-sm transition duration-200
                                 ${selectedOption === 'estudiante-eliminar' ? 'bg-indigo-600 text-white shadow-inner' : 'hover:bg-indigo-700 text-indigo-200 hover:text-white'}`}
                  >
                    Eliminar
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSubMenuClick('estudiante-modificar')}
                    className={`w-full text-left p-2 rounded-md text-sm transition duration-200
                                 ${selectedOption === 'estudiante-modificar' ? 'bg-indigo-600 text-white shadow-inner' : 'hover:bg-indigo-700 text-indigo-200 hover:text-white'}`}
                  >
                    Modificar
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSubMenuClick('estudiante-ver')}
                    className={`w-full text-left p-2 rounded-md text-sm transition duration-200
                                 ${selectedOption === 'estudiante-ver' ? 'bg-indigo-600 text-white shadow-inner' : 'hover:bg-indigo-700 text-indigo-200 hover:text-white'}`}
                  >
                    Ver
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* Opción 3: Profesor */}
          <div className="mb-4">
            <button
              onClick={() => handleMainMenuClick('profesor')}
              className="w-full flex items-center justify-between p-3 rounded-md transition-all duration-300 ease-in-out
                          hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75
                          text-lg font-medium text-indigo-100 group"
            >
              <span className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-indigo-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 1.933-2.686 3.5-6 3.5S0 12.933 0 11s2.686-3.5 6-3.5S12 9.067 12 11zm-6-2.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM20 11c0 1.933-2.686 3.5-6 3.5s-6-1.567-6-3.5 2.686-3.5 6-3.5 6 1.567 6 3.5zm-6-2.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path></svg>
                Profesor
              </span>
              <span className={`arrow-icon ${expandedMenu === 'profesor' ? 'rotated' : ''}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </span>
            </button>
            {expandedMenu === 'profesor' && (
              <ul className="pl-6 pt-2 space-y-2 animate-fade-in">
                <li>
                  <button
                    onClick={() => handleSubMenuClick('profesor-agregar')}
                    className={`w-full text-left p-2 rounded-md text-sm transition duration-200
                                 ${selectedOption === 'profesor-agregar' ? 'bg-indigo-600 text-white shadow-inner' : 'hover:bg-indigo-700 text-indigo-200 hover:text-white'}`}
                  >
                    Agregar
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSubMenuClick('profesor-eliminar')}
                    className={`w-full text-left p-2 rounded-md text-sm transition duration-200
                                 ${selectedOption === 'profesor-eliminar' ? 'bg-indigo-600 text-white shadow-inner' : 'hover:bg-indigo-700 text-indigo-200 hover:text-white'}`}
                  >
                    Eliminar
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSubMenuClick('profesor-modificar')}
                    className={`w-full text-left p-2 rounded-md text-sm transition duration-200
                                 ${selectedOption === 'profesor-modificar' ? 'bg-indigo-600 text-white shadow-inner' : 'hover:bg-indigo-700 text-indigo-200 hover:text-white'}`}
                  >
                    Modificar
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSubMenuClick('profesor-ver')}
                    className={`w-full text-left p-2 rounded-md text-sm transition duration-200
                                 ${selectedOption === 'profesor-ver' ? 'bg-indigo-600 text-white shadow-inner' : 'hover:bg-indigo-700 text-indigo-200 hover:text-white'}`}
                  >
                    Ver
                  </button>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </aside>

      {/* Área de Contenido Principal */}
      <main className="flex-1 p-8 overflow-auto flex items-center justify-center">
        {renderContentComponent()}
      </main>
    </div>
  );
}

export default AdminPanel;
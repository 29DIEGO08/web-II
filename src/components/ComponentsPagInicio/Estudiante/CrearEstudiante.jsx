import React, { useState } from 'react';
import { UserIcon, CalendarIcon, MailIcon, BookOpenIcon, HashIcon, PhoneIcon, HomeIcon } from 'lucide-react'; // Importa iconos relevantes

// Main App component for demonstration purposes
export default function CrearEstudiante() {
  // Función asíncrona para manejar la adición de un estudiante a través de una API
  const handleAddStudent = async (studentData) => {
    // URL de ejemplo para tu API. ¡Asegúrate de cambiarla por la URL real de tu backend!
    const apiUrl = 'https://tu-api.com/estudiantes'; // <--- ¡CAMBIA ESTA URL!

    try {
      // Realiza la petición POST a la API
      const response = await fetch(apiUrl, {
        method: 'POST', // Método HTTP para crear un recurso
        headers: {
          'Content-Type': 'application/json', // Indica que el cuerpo de la petición es JSON
          // Si tu API requiere autenticación, añade un token aquí:
          // 'Authorization': 'Bearer TU_TOKEN_DE_AUTENTICACION',
        },
        body: JSON.stringify(studentData), // Convierte los datos del formulario a una cadena JSON
      });

      // Verifica si la respuesta de la API fue exitosa (código de estado 2xx)
      if (response.ok) {
        const result = await response.json(); // Parsea la respuesta JSON de la API
        console.log('Estudiante agregado con éxito a la API:', result);
        showCustomMessageBox('¡Estudiante agregado con éxito!', 'success');
        // Aquí podrías actualizar un estado global o redirigir si es necesario
      } else {
        // Si la respuesta no fue exitosa, lee el mensaje de error de la API si está disponible
        const errorData = await response.json();
        console.error('Error al agregar estudiante a la API:', response.status, errorData);
        showCustomMessageBox(`Error al agregar estudiante: ${errorData.message || 'Error desconocido'}`, 'error');
      }
    } catch (error) {
      // Captura errores de red o cualquier otra excepción durante la petición
      console.error('Error de conexión o de red:', error);
      showCustomMessageBox('Error de conexión. Intenta de nuevo más tarde.', 'error');
    }
  };

  // Función para mostrar un cuadro de mensaje personalizado
  const showCustomMessageBox = (message, type) => {
    // Elimina cualquier mensaje anterior para evitar superposiciones
    const existingMessageBox = document.getElementById('custom-message-box');
    if (existingMessageBox) {
      existingMessageBox.remove();
    }

    const messageBox = document.createElement('div');
    messageBox.id = 'custom-message-box'; // Asigna un ID para poder referenciarlo
    messageBox.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    messageBox.innerHTML = `
      <div class="bg-white p-6 rounded-lg shadow-xl text-center">
        <p class="text-lg font-semibold mb-4 text-gray-800">${message}</p>
        <button id="close-message" class="px-4 py-2 ${type === 'success' ? 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500' : 'bg-red-500 hover:bg-red-600 focus:ring-red-500'} text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out">Cerrar</button>
      </div>
    `;
    document.body.appendChild(messageBox);
    document.getElementById('close-message').onclick = () => document.body.removeChild(messageBox);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4 font-sans">
      <StudentForm onAddStudent={handleAddStudent} />
    </div>
  );
}

// StudentForm component for adding new students
function StudentForm({ onAddStudent }) {
  // Estado para gestionar los datos del formulario del estudiante
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    matricula: '',
    grado: '',
    seccion: '',
    fechaNacimiento: '',
    telefono: '',
  });

  // Maneja los cambios en los inputs y actualiza el estado del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    onAddStudent(formData); // Llama a la función prop para agregar el estudiante

    // Reinicia el formulario después del envío
    setFormData({
      nombre: '',
      email: '',
      matricula: '',
      grado: '',
      seccion: '',
      fechaNacimiento: '',
      telefono: '',
    });
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg transform transition-all duration-300 hover:scale-[1.02] border border-gray-200">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
        Crear Nuevo Estudiante
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Input para el Nombre */}
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
            <UserIcon className="inline-block w-4 h-4 mr-2 text-blue-500" />
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out sm:text-sm"
            placeholder="Nombre completo del estudiante"
          />
        </div>

        {/* Input para el Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            <MailIcon className="inline-block w-4 h-4 mr-2 text-green-500" />
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out sm:text-sm"
            placeholder="ejemplo@dominio.com"
          />
        </div>

        {/* Input para la Matrícula */}
        <div>
          <label htmlFor="matricula" className="block text-sm font-medium text-gray-700 mb-1">
            <HashIcon className="inline-block w-4 h-4 mr-2 text-indigo-500" />
            Matrícula
          </label>
          <input
            type="text"
            id="matricula"
            name="matricula"
            value={formData.matricula}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm"
            placeholder="Número de matrícula del estudiante"
          />
        </div>

        {/* Input para el Grado */}
        <div>
          <label htmlFor="grado" className="block text-sm font-medium text-gray-700 mb-1">
            <BookOpenIcon className="inline-block w-4 h-4 mr-2 text-purple-500" />
            Grado
          </label>
          <input
            type="text"
            id="grado"
            name="grado"
            value={formData.grado}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out sm:text-sm"
            placeholder="Grado actual del estudiante (e.g., 5º, 6º)"
          />
        </div>

        {/* Input para la Sección */}
        <div>
          <label htmlFor="seccion" className="block text-sm font-medium text-gray-700 mb-1">
            <HomeIcon className="inline-block w-4 h-4 mr-2 text-orange-500" />
            Sección
          </label>
          <input
            type="text"
            id="seccion"
            name="seccion"
            value={formData.seccion}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out sm:text-sm"
            placeholder="Sección (e.g., A, B, C)"
          />
        </div>

        {/* Input para la Fecha de Nacimiento */}
        <div>
          <label htmlFor="fechaNacimiento" className="block text-sm font-medium text-gray-700 mb-1">
            <CalendarIcon className="inline-block w-4 h-4 mr-2 text-red-500" />
            Fecha de Nacimiento
          </label>
          <input
            type="date"
            id="fechaNacimiento"
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150 ease-in-out sm:text-sm"
          />
        </div>

        {/* Input para el Teléfono */}
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
            <PhoneIcon className="inline-block w-4 h-4 mr-2 text-teal-500" />
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 transition duration-150 ease-in-out sm:text-sm"
            placeholder="Número de teléfono (e.g., +1234567890)"
          />
        </div>

        {/* Botón de Enviar */}
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-lg text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition duration-200 ease-in-out hover:scale-105"
        >
          Crear Estudiante
        </button>
      </form>
    </div>
  );
}

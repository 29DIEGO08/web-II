import React, { useState } from 'react';
import { CalendarIcon, TagIcon, MapPinIcon, FileTextIcon } from 'lucide-react'; // Importa iconos relevantes

// Main App component that renders the EventForm
export default function CrearEvento() {
  // Función asíncrona para manejar la adición de un evento a través de una API
  const handleAddEvent = async (eventData) => {
    // URL de ejemplo para tu API. ¡Asegúrate de cambiarla por la URL real de tu backend!
    const apiUrl = 'https://tu-api.com/eventos'; // <--- ¡CAMBIA ESTA URL!

    try {
      // Realiza la petición POST a la API
      const response = await fetch(apiUrl, {
        method: 'POST', // Método HTTP para crear un recurso
        headers: {
          'Content-Type': 'application/json', // Indica que el cuerpo de la petición es JSON
          // Si tu API requiere autenticación, añade un token aquí:
          // 'Authorization': 'Bearer TU_TOKEN_DE_AUTENTICACION',
        },
        body: JSON.stringify(eventData), // Convierte los datos del formulario a una cadena JSON
      });

      // Verifica si la respuesta de la API fue exitosa (código de estado 2xx)
      if (response.ok) {
        const result = await response.json(); // Parsea la respuesta JSON de la API
        console.log('Evento agregado con éxito a la API:', result);
        showCustomMessageBox('¡Evento agregado con éxito!', 'success');
        // Aquí podrías actualizar un estado global o redirigir si es necesario
      } else {
        // Si la respuesta no fue exitosa, lee el mensaje de error de la API si está disponible
        const errorData = await response.json();
        console.error('Error al agregar evento a la API:', response.status, errorData);
        showCustomMessageBox(`Error al agregar evento: ${errorData.message || 'Error desconocido'}`, 'error');
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4 font-sans">
      <EventForm onAddEvent={handleAddEvent} /> {/* Pasa la función handleAddEvent como prop */}
    </div>
  );
}

// EventForm component for adding new events
function EventForm({ onAddEvent }) { // Ahora recibe onAddEvent como prop
  // Estado para gestionar los datos del formulario
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    eventCategory: '',
    eventLocation: '',
    eventDescription: '',
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
    onAddEvent(formData); // Llama a la función prop para agregar el evento (que ahora incluye la llamada a la API)

    // Reinicia el formulario después del envío
    setFormData({
      eventName: '',
      eventDate: '',
      eventCategory: '',
      eventLocation: '',
      eventDescription: '',
    });
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg transform transition-all duration-300 hover:scale-[1.02] border border-gray-200">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
        Agregar Nuevo Evento
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Event Name Input */}
        <div>
          <label htmlFor="eventName" className="block text-sm font-medium text-gray-700 mb-1">
            <TagIcon className="inline-block w-4 h-4 mr-2 text-blue-500" />
            Nombre del Evento
          </label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out sm:text-sm"
            placeholder="Reunión del equipo, Concierto de rock, etc."
          />
        </div>

        {/* Event Date Input */}
        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">
            <CalendarIcon className="inline-block w-4 h-4 mr-2 text-green-500" />
            Fecha
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out sm:text-sm"
          />
        </div>

        {/* Event Category Input */}
        <div>
          <label htmlFor="eventCategory" className="block text-sm font-medium text-gray-700 mb-1">
            <TagIcon className="inline-block w-4 h-4 mr-2 text-indigo-500" />
            Categoría
          </label>
          <input
            type="text"
            id="eventCategory"
            name="eventCategory"
            value={formData.eventCategory}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm"
            placeholder="Negocios, Personal, Social, etc."
          />
        </div>

        {/* Event Location Input */}
        <div>
          <label htmlFor="eventLocation" className="block text-sm font-medium text-gray-700 mb-1">
            <MapPinIcon className="inline-block w-4 h-4 mr-2 text-red-500" />
            Ubicación
          </label>
          <input
            type="text"
            id="eventLocation"
            name="eventLocation"
            value={formData.eventLocation}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150 ease-in-out sm:text-sm"
            placeholder="Cafetería Central, Sala de conferencias A, etc."
          />
        </div>

        {/* Event Description Textarea */}
        <div>
          <label htmlFor="eventDescription" className="block text-sm font-medium text-gray-700 mb-1">
            <FileTextIcon className="inline-block w-4 h-4 mr-2 text-yellow-500" />
            Descripción
          </label>
          <textarea
            id="eventDescription"
            name="eventDescription"
            value={formData.eventDescription}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 transition duration-150 ease-in-out sm:text-sm"
            placeholder="Detalles del evento, agenda, notas importantes, etc."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-lg text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition duration-200 ease-in-out hover:scale-105"
        >
          Agregar Evento
        </button>
      </form>
    </div>
  );
}

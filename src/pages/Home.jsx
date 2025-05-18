import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuLateral from "../components/MenuLateral";
import Card from "../components/Card";
import Modal from "../components/Modal";

export default function Home() {
  const cards = [
    {
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      title: "Evento de Fotografía",
      date: "2025-05-18",
      descripcion: "Un evento dedicado a la fotografía de naturaleza.",
      categoria: "Arte",
    },
    {
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      title: "Taller de Pintura",
      date: "2025-06-10",
      descripcion: "Taller introductorio a la pintura acrílica.",
      categoria: "Arte",
    },
    {
      image: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?auto=format&fit=crop&w=400&q=80",
      title: "Conferencia de Ciencia",
      date: "2025-07-01",
      descripcion: "Una conferencia sobre avances en la ciencia moderna.",
      categoria: "Ciencia",
    },
    {
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80",
      title: "Concierto Escolar",
      date: "2025-07-20",
      descripcion: "Concierto con bandas estudiantiles.",
      categoria: "Música",
    },
    {
      image: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=400&q=80",
      title: "Feria de Libros",
      date: "2025-08-12",
      descripcion: "Feria de intercambio y venta de libros.",
      categoria: "Literatura",
    },
    {
      image: "https://images.unsplash.com/photo-1465101178521-c1a9136a18b7?auto=format&fit=crop&w=400&q=80",
      title: "Exposición de Arte",
      date: "2025-09-05",
      descripcion: "Exposición de obras de estudiantes.",
      categoria: "Arte",
    },
    {
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4842?auto=format&fit=crop&w=400&q=80",
      title: "Torneo de Ajedrez",
      date: "2025-09-22",
      descripcion: "Competencia interna de ajedrez.",
      categoria: "Deporte",
    },
    {
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      title: "Carrera de Atletismo",
      date: "2025-10-10",
      descripcion: "Carrera de 5km dentro de la escuela.",
      categoria: "Deporte",
    },
    {
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
      title: "Concurso de Robótica",
      date: "2025-10-28",
      descripcion: "Competencia de robótica para todas las edades.",
      categoria: "Tecnología",
    },
    {
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      title: "Taller de Lectura",
      date: "2025-11-14",
      descripcion: "Sesión de lectura y análisis literario.",
      categoria: "Literatura",
    },
    {
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      title: "Festival de Ciencias",
      date: "2025-11-30",
      descripcion: "Festival con experimentos y exposiciones científicas.",
      categoria: "Ciencia",
    },
    {
      image: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=400&q=80",
      title: "Concurso de Dibujo",
      date: "2025-12-12",
      descripcion: "Concurso abierto de dibujo para estudiantes.",
      categoria: "Arte",
    },
    {
      image: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?auto=format&fit=crop&w=400&q=80",
      title: "Torneo de Futbol",
      date: "2026-01-16",
      descripcion: "Competencia interna de futbol rápido.",
      categoria: "Deporte",
    },
    {
      image: "https://images.unsplash.com/photo-1465101178521-c1a9136a18b7?auto=format&fit=crop&w=400&q=80",
      title: "Noche de Astronomía",
      date: "2026-02-14",
      descripcion: "Observación de estrellas y planetas.",
      categoria: "Ciencia",
    },
    {
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4842?auto=format&fit=crop&w=400&q=80",
      title: "Maratón de Matemáticas",
      date: "2026-03-03",
      descripcion: "Competencia de problemas matemáticos.",
      categoria: "Ciencia",
    },
  ];

  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen w-full bg-neutral-100 relative">
      <aside className="fixed top-0 left-0 h-screen w-64 bg-white shadow-md z-30 flex flex-col">
        <MenuLateral />
      </aside>
      <main className={`ml-64 flex-1 ${selectedCard ? "blur-sm" : ""}`}>
        <div className="flex flex-wrap justify-start gap-6 pt-10">
          {cards.map((card, idx) => (
            <Card
              key={idx}
              image={card.image}
              title={card.title}
              date={card.date}
              onClick={() => setSelectedCard(card)}
            />
          ))}
        </div>
      </main>
      <Modal open={!!selectedCard} onClose={() => setSelectedCard(null)}>
        {selectedCard && (
          <>
            <img src={selectedCard.image} alt={selectedCard.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold mb-2">{selectedCard.title}</h2>
            <p className="text-gray-500 mb-2">Fecha de ejecución: {selectedCard.date}</p>
            <p className="mb-2"><span className="font-semibold">Categoría:</span> {selectedCard.categoria}</p>
            <p className="mb-4">{selectedCard.descripcion}</p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-bold"
              onClick={() => navigate("/formulario")}
            >
              Quiero participar
            </button>
          </>
        )}
      </Modal>
    </div>
  );
}
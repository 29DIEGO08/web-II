import MenuLateral from "../../components/MenuLateral";

const cards = [
  { image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", title: "Título 1", date: "2025-05-18" },
  { image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", title: "Título 2", date: "2025-06-10" },
  // ...otros eventos
];

function Card({ image, title, date }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 w-72">
      <img src={image} alt={title} className="h-32 w-full object-cover rounded-t-lg mb-2" />
      <h3 className="text-xl font-bold text-blue-700">{title}</h3>
      <p className="text-gray-500">{date}</p>
    </div>
  );
}

export default function Participaciones() {
  return (
    <div className="flex min-h-screen w-full bg-neutral-100">
      <aside className="fixed top-0 left-0 h-screen w-64 bg-white shadow-md z-30 flex flex-col">
        <MenuLateral />
      </aside>
      <main className="ml-64 flex-1">
        <div className="flex flex-wrap justify-start gap-6 pt-10">
          {cards.map((card, idx) => (
            <Card key={idx} {...card} />
          ))}
        </div>
      </main>
    </div>
  );
}
import MenuLateral from "../../components/MenuLateral";
import Card from "../../components/Card";

export default function Participaciones() {
  const cards = [
    { image: "url1", title: "Título 1", date: "2025-05-18" },
    { image: "url2", title: "Título 2", date: "2025-06-10" },
    { image: "url3", title: "Título 3", date: "2025-07-22" },
    { image: "url4", title: "Título 4", date: "2025-08-30" }
   
    
    
  ];

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
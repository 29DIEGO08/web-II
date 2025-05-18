export default function Card({ image, title, date, onClick }) {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden w-72 cursor-pointer transition-transform hover:scale-105"
      onClick={onClick}
    >
      <img src={image} alt={title} className="w-full h-44 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-500 text-sm">Fecha de ejecución: {date}</p>
      </div>
    </div>
  );
}
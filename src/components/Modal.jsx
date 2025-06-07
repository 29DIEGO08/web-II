export default function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-md animate-fade-in">
      <div className="relative bg-gradient-to-br from-white via-blue-50 to-pink-50 rounded-3xl shadow-2xl p-10 w-full max-w-lg border-t-8 border-blue-200">
        <button
          className="absolute top-3 right-5 text-3xl text-gray-400 hover:text-red-500 font-bold rounded-full bg-white bg-opacity-70 px-3 pb-1 transition"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          ×
        </button>
        <div>{children}</div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.97);}
          to { opacity: 1; transform: scale(1);}
        }
        .animate-fade-in {
          animation: fade-in 0.35s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
}
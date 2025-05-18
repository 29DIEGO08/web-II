export default function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md relative">
        <button
          className="absolute top-2 right-4 text-2xl text-gray-600 hover:text-red-500"
          onClick={onClose}
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
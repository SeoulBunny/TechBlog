import { LuX } from "react-icons/lu";

interface ModaProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModaProps) => {
  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-opacity duration-700 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      {/* backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/90 transition-all duration-700 ${isOpen ? "opacity-100" : "opacity-0"}`}
      />

      {/* modal */}
      <div
        className={`relative z-10 w-full max-w-md rounded-2xl bg-secondary-background border border-white/10 px-6 py-12 shadow-xl transform transition-all duration-700 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
      >
        <button
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition"
          aria-label="CloseModal"
          onClick={onClose}
        >
          <LuX size={22} />
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;

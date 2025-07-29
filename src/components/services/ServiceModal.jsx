// src/components/services/ServiceModal.jsx
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServiceModal({ isOpen, onClose, title, details }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white w-[90%] max-w-xl rounded-2xl shadow-2xl p-8 text-right"
            dir="rtl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 left-4 text-gray-400 hover:text-red-500 transition"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-blue-700 mb-4">{title}</h3>
            <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
              {details}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

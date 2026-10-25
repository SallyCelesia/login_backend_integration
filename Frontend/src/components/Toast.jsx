import React from "react";

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed top-5 right-5 z-50 flex items-center gap-3 bg-red-100 border border-red-400 text-red-800 px-4 py-3 rounded-xl shadow-lg transition-all duration-300 animate-bounce">
      <span className="text-lg">⚠️</span>
      <span className="text-sm font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-red-600 hover:text-red-900 font-bold"
      >
        ✕
      </button>
    </div>
  );
}
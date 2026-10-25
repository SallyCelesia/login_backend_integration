import React from "react";

export default function RedirectModal({ isOpen, email, onConfirm, onCancel, darkMode }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div
        className={`w-full max-w-sm rounded-2xl p-6 border shadow-2xl transition-all duration-200 ${
          darkMode ? "bg-slate-800 border-slate-700 text-white" : "bg-white border-slate-200 text-slate-800"
        }`}
      >
        <div className="text-center mb-4">
          <span className="text-4xl">⚠️</span>
          <h3 className="text-lg font-bold mt-2">Account Not Found</h3>
          <p className={`text-sm mt-1 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
            No account matches <span className="font-semibold text-indigo-500">{email}</span>.
            Would you like to sign up now?
          </p>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onCancel}
            className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 hover:scale-105 active:scale-95 ${
              darkMode
                ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                : "border-slate-300 text-slate-700 hover:bg-slate-100"
            }`}
          >
            No, Stay Here
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Yes, Sign Up →
          </button>
        </div>
      </div>
    </div>
  );
}
import React from "react";

export default function Navbar({ darkMode, setDarkMode, user, onLogout }) {
  return (
    <nav
      className={`flex justify-between items-center px-8 py-4 border-b transition-colors duration-300 ${
        darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
      }`}
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold shadow-md">
          R
        </div>
        <span className="text-xl font-bold tracking-tight">
          Resu<span className="text-indigo-500">metrics</span> AI
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200 hover:scale-105 active:scale-95 ${
            darkMode
              ? "bg-slate-700 border-slate-600 text-yellow-300 hover:bg-slate-600"
              : "bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200"
          }`}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        {user && (
          <button
            onClick={onLogout}
            className="px-4 py-1.5 rounded-lg text-sm font-medium bg-red-500 text-white hover:bg-red-600 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
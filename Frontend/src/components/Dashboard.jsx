import React from "react";

export default function Dashboard({ user, darkMode }) {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold">
        Welcome back, <span className="text-indigo-500">{user.name}</span>! 👋
      </h1>
      <p className={darkMode ? "text-slate-400 mt-1" : "text-slate-500 mt-1"}>
        Upload your resume and analyse it with AI.
      </p>

      {/* Upload area */}
      <div
        className={`border-2 border-dashed rounded-2xl p-8 text-center my-8 transition-all duration-300 ${
          darkMode
            ? "bg-slate-800/50 border-slate-700 hover:bg-slate-800"
            : "bg-indigo-50/40 border-indigo-200 hover:bg-indigo-50"
        }`}
      >
        <div className="text-4xl mb-2">📄</div>
        <h3 className="font-semibold text-lg">Drop your resume here or click to upload</h3>
        <button className="mt-4 px-5 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg shadow hover:bg-indigo-700 transition-transform duration-200 hover:scale-105 active:scale-95">
          Analyze New Resume
        </button>
      </div>

      {/* Score cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          className={`p-6 rounded-2xl border ${
            darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
          }`}
        >
          <p className="text-sm text-slate-400 font-medium">ATS Score</p>
          <h2 className="text-4xl font-extrabold text-emerald-500 mt-2">86 / 100</h2>
        </div>
        <div
          className={`p-6 rounded-2xl border ${
            darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
          }`}
        >
          <p className="text-sm text-slate-400 font-medium">Keywords</p>
          <h2 className="text-4xl font-extrabold text-indigo-500 mt-2">18 / 22</h2>
        </div>
        <div
          className={`p-6 rounded-2xl border ${
            darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
          }`}
        >
          <p className="text-sm text-slate-400 font-medium">Readability</p>
          <h2 className="text-4xl font-extrabold text-amber-500 mt-2">Strong</h2>
        </div>
      </div>
    </div>
  );
}
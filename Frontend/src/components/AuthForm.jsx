import React from "react";

export default function AuthForm({
  isLoginPage,
  setIsLoginPage,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
  darkMode,
}) {
  return (
    <div className="flex items-center justify-center px-4 py-16">
      <div
        className={`w-full max-w-md p-8 rounded-2xl border shadow-xl transition-all duration-300 ${
          darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
        }`}
      >
        <div className="text-center mb-6">
          <span className="px-3 py-1 text-xs font-semibold bg-indigo-500/10 text-indigo-500 rounded-full">
            AI Resume Analyzer
          </span>
          <h2 className="text-2xl font-bold mt-3">
            {isLoginPage ? "Sign in to Resumetrics" : "Create your free account"}
          </h2>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          {!isLoginPage && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-indigo-500 ${
                  darkMode
                    ? "bg-slate-900 border-slate-700 text-white"
                    : "bg-slate-50 border-slate-300 text-slate-900"
                }`}
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-indigo-500 ${
                darkMode
                  ? "bg-slate-900 border-slate-700 text-white"
                  : "bg-slate-50 border-slate-300 text-slate-900"
              }`}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-indigo-500 ${
                darkMode
                  ? "bg-slate-900 border-slate-700 text-white"
                  : "bg-slate-50 border-slate-300 text-slate-900"
              }`}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
          >
            {isLoginPage ? "Login to Dashboard →" : "Create Account →"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-slate-400">
            {isLoginPage ? "Don't have an account? " : "Already have an account? "}
          </span>
          <button
            onClick={() => setIsLoginPage(!isLoginPage)}
            className="text-indigo-500 font-semibold hover:underline ml-1"
          >
            {isLoginPage ? "Sign up" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
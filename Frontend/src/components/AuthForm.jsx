import { useState } from "react";

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
  const [showPasswordRequirements, setShowPasswordRequirements] = useState(false);
  const passwordRequirements = [
    { label: "Minimum 6 characters", isMet: password.length >= 6 },
    { label: "At least one uppercase letter", isMet: /[A-Z]/.test(password) },
    { label: "At least one number", isMet: /\d/.test(password) },
    { label: "At least one symbol", isMet: /[^A-Za-z0-9\s]/.test(password) },
  ];

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
              onFocus={() => {
                if (!isLoginPage) setShowPasswordRequirements(true);
              }}
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

        {!isLoginPage && showPasswordRequirements && (
          <ul
            className="mt-3 flex flex-wrap -mx-1"
            aria-live="polite"
            aria-label="Password requirements"
          >
            {passwordRequirements.map(({ label, isMet }) => (
              <li key={label} className="w-1/2 px-1 pb-2">
                <div
                  className={`h-full rounded-lg p-2 text-sm transition-colors duration-200 ${
                    isMet
                      ? darkMode
                        ? "bg-green-900/40 text-green-300"
                        : "bg-green-50 text-green-700"
                      : darkMode
                        ? "bg-slate-700 text-red-300"
                        : "bg-gray-100 text-red-600"
                  }`}
                >
                  {label}
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 text-center text-sm">
          <span className="text-slate-400">
            {isLoginPage ? "Don't have an account? " : "Already have an account? "}
          </span>
          <button
            onClick={() => {
              setIsLoginPage(!isLoginPage);
              setShowPasswordRequirements(false);
            }}
            className="text-indigo-500 font-semibold hover:underline ml-1"
          >
            {isLoginPage ? "Sign up" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
import {useState} from "react";
import Navbar from "./components/Navbar";
import Toast from "./components/Toast";
import RedirectModal from "./components/RedirectModal";
import AuthForm from "./components/AuthForm";
import Dashboard from "./components/Dashboard";

export default function App() {

  const API_BASE_URL = "https://resumetrics-backend-1wa0.onrender.com";
  const [darkMode, setDarkMode] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorToast, setErrorToast] = useState("");
  const [showRedirectModal, setShowRedirectModal] = useState(false);

  function triggerErrorToast(message) {
    setErrorToast(message);
    setTimeout(() => setErrorToast(""), 3500);
  }

  function validateInputs() {
    if (!isLoginPage && name.trim().length < 2) {
      triggerErrorToast("Please enter a valid full name (at least 2 letters).");
      return false;
    }
    if (!email.includes("@") || !email.includes(".")) {
      triggerErrorToast("Please enter a valid email address.");
      return false;
    }
    if (password.length < 6 && !isLoginPage) {
      triggerErrorToast("Password must be at least 6 characters long.");
      return false;
    }
    return true;
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    if (!validateInputs()) return;

    const endpoint = isLoginPage ? `${API_BASE_URL}/api/login` : `${API_BASE_URL}/api/signup`;

    const payload = isLoginPage ? { email, password } : { name, email, password };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (isLoginPage && data.userNotFound) {
        setShowRedirectModal(true);
        return;
      }

      if (!response.ok || !data.success) {
        triggerErrorToast(data.message || "Something went wrong!");
      } else {
        setLoggedInUser(data.user);
        setErrorToast("");
      }
    } catch {
      triggerErrorToast("Cannot connect to server. Is the backend running?");
    }
  }

  function handleConfirmRedirect() {
    setShowRedirectModal(false);
    setIsLoginPage(false);
    setPassword("");
  }

  function handleLogout() {
    setLoggedInUser(null);
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-800"
      }`}
    >
      <Toast message={errorToast} onClose={() => setErrorToast("")} />

      <RedirectModal
        isOpen={showRedirectModal}
        email={email}
        onConfirm={handleConfirmRedirect}
        onCancel={() => setShowRedirectModal(false)}
        darkMode={darkMode}
      />

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        user={loggedInUser}
        onLogout={handleLogout}
      />

      {loggedInUser ? (
        <Dashboard user={loggedInUser} darkMode={darkMode} />
      ) : (
        <AuthForm
          isLoginPage={isLoginPage}
          setIsLoginPage={setIsLoginPage}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onSubmit={handleFormSubmit}
          darkMode={darkMode}
        />
      )}
    </div>
  );
}
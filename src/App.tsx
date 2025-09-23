import "./index.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./components/sections/Home";
import Dashboard from "./components/Dashboard";
import Footer from "./components/layout/Footer";

import Register from "./components/sections/Register";
import Login from "./components/sections/Login";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <AuthProvider>
      <Navbar />
    
  <Routes>
    {/* Public routes */}
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />

    {/* Protected routes */}
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />
  </Routes>
</AuthProvider>

      <Footer />
    </div>
  );
};

export default App;

// import { Routes, Route } from "react-router-dom";

// import Register from "./components/sections/Register";

// function App() {
//   return (
//     <>

//       <Routes>
//         <Route path="/" element={<h1 className="p-8">Home Page Works ✅</h1>} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

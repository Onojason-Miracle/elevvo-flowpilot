// src/pages/Dashboard.tsx
// import { signOut } from "firebase/auth";
// import { auth } from "../lib/firebase";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  // const handleLogout = async () => {
  //   await signOut(auth);
  // };

  return (
    <div className=" w-[90%] mx-auto min-h-screen bg-zinc-50 text-zinc-900 mt-8 dark:bg-zinc-950 dark:text-zinc-100p-6">
      <header className="  mb-6">
        <h1 className="text-3xl font-bold bg-gradient-to-tr from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
          Flow Pilot Dashboard
        </h1>
      </header>

      <main>
        <h2 className="text-2xl font-medium mb-4  dark:text-zinc-100 mt-8">
          Welcome, {user?.displayName || user?.email}
        </h2>

        {/* Future features: Automations, AI helper */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Your Automations</h3>
            <p className="text-gray-600">Create and manage workflows here.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">AI Helper</h3>
            <p className="text-gray-600">Get task suggestions powered by AI.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

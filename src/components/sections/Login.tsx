import React, { useState } from "react";
import { auth, googleProvider } from "@lib/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  // useNavigate hook for programmatic navigation
  const navigate = useNavigate();

  // Handle email + password login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);

      // ✅ Redirect to dashboard on success
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
  };

  // Handle Google login
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);

      // ✅ Redirect to dashboard on success
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex justify-center items-center min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100"
    >
      <div className="p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-tr from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent text-center">
          Login to FlowPilot
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg"
            required
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-gradient-to-tr from-indigo-600 via-violet-600 to-fuchsia-600 text-white"
          >
            Login
          </button>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="w-full mt-4 p-3 rounded-lg border flex items-center justify-center gap-2 hover:bg-gray-100 hover:text-zinc-900 transition"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>

        <p className="text-center mt-5">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-fuchsia-600">
            Register
          </Link>
        </p>
      </div>
    </motion.div>
  );
}

export default Login;

// import React, { useState } from "react";
// import { auth, googleProvider } from "@lib/firebase";
// import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState<string | null>(null);

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//     } catch (err: any) {
//       setError(err.message);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//     } catch (err: any) {
//       setError(err.message);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="flex justify-center items-center min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100"
//     >
//       <div className=" p-8 rounded-2xl shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold mb-6 bg-gradient-to-tr from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent text-center">
//           Login to FlowPilot
//         </h2>

//         <form onSubmit={handleLogin} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-3 border rounded-lg"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-3 border rounded-lg"
//             required
//           />

//           {error && <p className="text-red-500 text-sm">{error}</p>}

//           <button
//             type="submit"
//             className="w-full p-3 rounded-lg bg-gradient-to-tr from-indigo-600 via-violet-600 to-fuchsia-600 text-white"
//           >
//             Login
//           </button>
//         </form>

//         <button
//           onClick={handleGoogleSignIn}
//           className="w-full mt-4 p-3 rounded-lg border flex items-center justify-center gap-2 hover:bg-gray-100 hover:text-zinc-900 transition"
//         >
//           <img
//             src="https://www.svgrepo.com/show/355037/google.svg"
//             alt="Google"
//             className="w-5 h-5"
//           />
//           Sign in with Google
//         </button>

//           <p className="text-center mt-5">Don't have an account? <Link to="/register" className="text-fuchsia-600">Register</Link> </p>
//       </div>
//     </motion.div>
//   );
// }

// export default Login;

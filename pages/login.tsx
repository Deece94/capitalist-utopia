import { useState } from "react";
import {
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "../helpers/users";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-2 border-gray-300 p-2 rounded-lg"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border-2 border-gray-300 p-2 rounded-lg"
      />
      <button
        onClick={() => logInWithEmailAndPassword(email, password)}
        className="bg-black text-white p-2 rounded-lg"
      >
        Log in
      </button>
      <button
        onClick={signInWithGoogle}
        className="bg-blue-500 text-white p-2 rounded-lg"
      >
        Sign in with Google
      </button>
    </div>
  );
}

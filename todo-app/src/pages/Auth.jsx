import { useState } from "react";
import { signUp, signIn, logout } from "../services/authService";
import { useAuthStore } from "../store/authStore";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useAuthStore();

  const handleSignUp = async () => {
    try {
      const userCredential = await signUp(email, password);
      setUser(userCredential.user);
      alert("Sign-Up Successful");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await signIn(email, password);
      setUser(userCredential.user);
      alert("Sign-In Successful");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-4 bg-gray-100 rounded-lg shadow-lg w-96 mx-auto mt-20">
      <h2 className="text-2xl font-bold">
        {user ? "Welcome" : "Sign In / Sign Up"}
      </h2>
      {user ? (
        <>
          <p>Logged in as: {user.email}</p>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSignIn}
          >
            Sign In
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </>
      )}
    </div>
  );
}

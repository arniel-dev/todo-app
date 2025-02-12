import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "../services/authService";
import { useAuthStore } from "../store/authStore";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const { user, setUser } = useAuthStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  const onSubmit = async (data) => {
    try {
      const userCredential = await signIn(data.email, data.password);
      setUser(userCredential.user);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-4 bg-gray-100 rounded-lg shadow-lg w-96 mx-auto mt-20">
      <h2 className="text-2xl font-bold">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-3">
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" },
          })}
          className="w-full p-2 border rounded"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
          className="w-full p-2 border rounded"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Sign In
        </button>
      </form>
      <p className="text-sm">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-500">
          Sign Up
        </Link>
      </p>
    </div>
  );
}

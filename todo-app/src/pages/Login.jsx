import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "../services/authService";
import { useAuthStore } from "../store/authStore";
import { useNavigate, Link } from "react-router-dom";
import FormLayout from "../components/FormLayout";

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
    <FormLayout title={"Log in"}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            id="email"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email format",
              },
            })}
            className="border p-3 dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <input
            id="password"
            {...register("password", {
              required: "Password is required",
            })}
            type="password"
            placeholder="Password"
            className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <Link
          className="group text-blue-400 transition-all duration-100 ease-in-out"
          href="#"
        >
          <span className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Forget your password?
          </span>
        </Link>
        <button
          className="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
          type="submit"
        >
          LOG IN
        </button>
      </form>
      <div className="flex flex-col mt-4 items-center justify-center text-sm">
        <h3 className="dark:text-gray-300">
          Don't have an account?
          <Link
            className="group text-blue-400 transition-all duration-100 ease-in-out"
            to="/signup"
          >
            <span className="m-1 bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Sign Up
            </span>
          </Link>
        </h3>
      </div>

      <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm">
        <p className="cursor-default">
          By signing in, you agree to our
          <Link className="group text-blue-400 transition-all duration-100 ease-in-out">
            <span className="m-1 cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Terms
            </span>
          </Link>
          and
          <Link className="group text-blue-400 transition-all duration-100 ease-in-out">
            <span className="m-1 cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Privacy Policy
            </span>
          </Link>
        </p>
      </div>
    </FormLayout>
  );
}

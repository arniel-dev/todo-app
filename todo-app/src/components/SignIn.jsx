import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router";
import TextField from "./TextField";
import Button from "./Button";
import Link from "./Link";
import { signIn } from "../services/authService";
import useAuth from "../hooks/useAuth";

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignIn = ({ toggle }) => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = async (data) => {
    try {
      const userCredential = await signIn(data.email, data.password);
      console.log(userCredential);
      navigate("/", { replace: true });
      login(userCredential?.user?.accessToken);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="col align-items-center flex-col sign-in">
      <form className="form sign-in" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-wrapper align-items-center">
          <TextField
            id="email"
            label="Email"
            {...register("email")}
            variant="outlined"
            error={!!errors.email}
            helperText={errors?.email?.message}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            {...register("password")}
            variant="outlined"
            error={!!errors.password}
            helperText={errors?.password?.message}
          />
          <Button sx={{ marginTop: 16 }} type="submit" variant="contained">
            Sign in
          </Button>
          <div>
            <span>Don't have an account?</span>
            <Link onClick={toggle} aria-label="">
              Sign up here
            </Link>
          </div>
          <div className="terms">
            <p>
              By signing in, you agree to our
              <Link sx={{ margin: 2 }}>Terms</Link>
              and
              <Link>Privacy Policy</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

SignIn.propTypes = {
  toggle: PropTypes.func,
  isSignInForm: PropTypes.bool,
};

export default SignIn;

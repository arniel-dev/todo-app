import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signUp } from "../services/authService";
import { useNavigate } from "react-router";
import TextField from "./TextField";
import Button from "./Button";
import Link from "./Link";

const formSchema = yup.object().shape({
  fullname: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const SignUp = ({ toggle }) => {
  // const { setUser } = useAuthStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = async (data) => {
    try {
      await signUp(data.fullname, data.email, data.password);
      navigate(0);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="col align-items-center flex-col sign-up">
      <form className="form sign-up" onSubmit={handleSubmit(onSubmit)}>
        <div
          className="form-wrapper align-items-center"
          spacing={2}
          direction="column"
        >
          <TextField
            id="fullname"
            label="Full Name"
            {...register("fullname")}
            variant="outlined"
            error={!!errors.fullname}
            helperText={errors?.fullname?.message}
          />
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
          <TextField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            {...register("confirmPassword")}
            variant="outlined"
            error={!!errors.confirmPassword}
            helperText={errors?.confirmPassword?.message}
          />
          <Button sx={{ marginTop: 16 }} type="submit" variant="contained">
            Sign up
          </Button>
          <div>
            <div>
              <span>Already have an account?</span>
              <Link
                component="span"
                variant="body2"
                onClick={toggle}
                underline="hover"
                aria-label=""
                sx={{ cursor: "pointer", marginLeft: "4px" }}
              >
                Sign in here
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

SignUp.propTypes = {
  toggle: PropTypes.func,
  isSignInForm: PropTypes.bool,
};

export default SignUp;

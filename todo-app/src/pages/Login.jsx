/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import "../styles/login.scss";
import { useNavigate } from "react-router";
import SignUp from "../components/SignUp";
import SideContent from "../components/SideContent";
import SignIn from "../components/SignIn";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {
  const { isAuthenticated } = useAuth();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const navigate = useNavigate();
  const toggle = () => {
    setIsSignInForm((prev) => !prev);
  };
  useEffect(() => {
    if (isAuthenticated) navigate("/", { replace: true });
  }, [isAuthenticated]);

  // Ensure the container starts with sign-in state on mount
  useEffect(() => {
    setIsSignInForm(true);
  }, []);

  return (
    <div
      className={`container ${isSignInForm ? "sign-in" : "sign-up"}`}
      id="container"
    >
      {/* FORM SECTION */}
      <div className="row">
        <SignUp isSignInForm={isSignInForm} toggle={toggle} />
        <SignIn isSignInForm={isSignInForm} toggle={toggle} />
      </div>
      <SideContent />
    </div>
  );
};

export default LoginPage;

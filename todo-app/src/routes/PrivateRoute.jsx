import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import Loader from "../components/Loader";
import { useEffect } from "react";
function PrivateRoute() {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user]);

  return (
    <>
      {user === undefined ? (
        <Loader />
      ) : (
        <>
          <Outlet />
        </>
      )}
    </>
  );
}

export default PrivateRoute;

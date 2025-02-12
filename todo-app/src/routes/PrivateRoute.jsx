import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import PropTypes from "prop-types";
import Loader from "../components/Loader";
function PrivateRoute({ children }) {
  const { user } = useAuthStore();

  if (user === undefined) {
    return <Loader />;
  }

  return user ? children : <Navigate to="/login" />;
}
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;

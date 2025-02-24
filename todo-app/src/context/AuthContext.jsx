import { jwtDecode } from "jwt-decode";
import React, { createContext } from "react";
import { useCookies } from "react-cookie";
import PropTypes from "prop-types";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["token", "user"]);
  const token = cookies?.token || null;
  const userInfo = cookies?.user || null;

  const login = (userData) => {
    const userToken = userData?.accessToken;
    const decoded = jwtDecode(userToken);
    const date = new Date(decoded.exp * 1000);
    const user = {
      name: decoded?.name,
      user_id: userData?.user?.id,
      email: decoded?.email,
    };
    setCookie("user", user, {
      path: "/",
      expires: date,
    });

    setCookie("token", userToken, {
      path: "/",
      expires: date,
    });
  };
  const logout = () => {
    removeCookie("token");
    removeCookie("user");
  };
  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};

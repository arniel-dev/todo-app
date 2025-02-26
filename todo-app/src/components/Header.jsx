import "../styles/header.scss";
import useAuth from "../hooks/useAuth";

function Header() {
  const { userInfo, logout } = useAuth();

  return (
    <div className="header-bar">
      <h1>To-Do Board</h1>
      <div className="user-info">
        {userInfo ? (
          <>
            <span>Welcome, {userInfo.name || userInfo.email}</span>
            <button onClick={() => logout()}>Logout</button>
          </>
        ) : (
          <span>Loading user...</span>
        )}
      </div>
    </div>
  );
}

export default Header;

import "../styles/header.scss";
import useAuth from "../hooks/useAuth";
import logo from "../assets/liketrello.svg";
function Header() {
  const { userInfo, logout } = useAuth();

  return (
    <div className="header-bar">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          style={{
            border: "solid 2px white",
            borderRadius: 10,
            marginRight: "5px",
          }}
          src={logo}
          alt="Logo"
        />
        <h1>LikeTrello</h1>
      </div>

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

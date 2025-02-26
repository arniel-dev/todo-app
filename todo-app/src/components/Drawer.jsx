import { useEffect } from "react";
import PropTypes from "prop-types";

function Drawer({ isOpen, onClose, children }) {
  // Close the drawer when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && e.target.closest(".drawer-content") === null) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div
      className={`drawer ${isOpen ? "open" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        height: "100%",
        width: "400px",
        backgroundColor: "#fff",
        boxShadow: "-2px 0 8px rgba(0, 0, 0, 0.1)",
        transform: isOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.3s ease-in-out",
        zIndex: 1000,
      }}
    >
      <div className="drawer-content" style={{ padding: "20px" }}>
        {children}
      </div>
    </div>
  );
}

Drawer.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Drawer;

import React from "react";
import PropTypes from "prop-types";

function Button({ sx, variant, children, onClick, ...props }) {
  const styles = {
    button: {
      padding: "8px 16px",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "500",
      height: "50px",
      textTransform: "uppercase",
      transition: "background-color 0.3s ease",
      ...(variant === "contained" && {}),
      ...(variant === "outlined" && {
        backgroundColor: "transparent",
      }),
      ...(variant === "text" && {
        backgroundColor: "transparent",
      }),
      ...sx,
    },
  };

  return (
    <button {...props} style={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  sx: PropTypes.object,
};

Button.defaultProps = {
  variant: "contained",
  color: "primary",
  onClick: () => {},
};

export default Button;

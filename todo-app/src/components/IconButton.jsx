import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/iconButton.scss";

// Helper function to darken a color
const darkenColor = (color, amount = 20) => {
  if (!color || typeof color !== "string" || !color.startsWith("#")) {
    return "#333";
  }

  // Remove the '#' from the color if it exists
  color = color.replace("#", "");

  // Convert the color to RGB
  let r = parseInt(color.substring(0, 2), 16);
  let g = parseInt(color.substring(2, 4), 16);
  let b = parseInt(color.substring(4, 6), 16);

  // Darken the color by reducing the RGB values
  r = Math.max(0, r - amount);
  g = Math.max(0, g - amount);
  b = Math.max(0, b - amount);

  // Convert the darkened RGB values back to a hex color
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

const IconButton = ({
  onClick,
  ariaLabel,
  icon,
  customIcon,
  label,
  backgroundColor,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverColor = darkenColor(backgroundColor);

  return (
    <button
      className={`icon-button ${label ? "has-label" : "no-label"}`}
      onClick={onClick}
      aria-label={ariaLabel}
      style={{ backgroundColor: isHovered ? hoverColor : backgroundColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {customIcon ? (
        <span className="icon">{customIcon}</span>
      ) : (
        <FontAwesomeIcon icon={icon} className="icon" />
      )}
      {label && <span className="button-label">{label}</span>}
    </button>
  );
};

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  customIcon: PropTypes.node,
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
};

IconButton.defaultProps = {
  icon: null,
  customIcon: null,
  label: "",
  backgroundColor: "#007bff", // Default background color (blue)
};

export default IconButton;

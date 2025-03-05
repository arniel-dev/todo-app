import React, { useState } from "react";
import "../styles/floatingMenuButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "./IconButton";
import PropTypes from "prop-types";

const FloatingMenuButton = ({ mainIcon, items }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isShrinking, setIsShrinking] = useState(false);

  const toggleMenu = () => {
    if (isExpanded) {
      setIsShrinking(true);
      setTimeout(() => {
        setIsExpanded(false);
        setIsShrinking(false);
      }, 300);
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <div className="floating-menu-container">
      <div
        className={`floating-menu ${isExpanded ? "expanded" : ""} ${
          isShrinking ? "shrinking" : ""
        }`}
      >
        {/* Render all menu items, but hide them when collapsed */}
        {isExpanded &&
          items.map((item, index) => (
            <div key={index} className="menu-item" onClick={item.onClick}>
              <IconButton
                icon={item.icon}
                onClick={item.onClick}
                ariaLabel={item.ariaLabel || item.label}
                label={item.label}
                backgroundColor={item.bgColor}
              />
            </div>
          ))}

        <div
          className={`main-button ${isExpanded ? "rotate" : ""}`}
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={mainIcon} className="icon" />
        </div>
      </div>
    </div>
  );
};

FloatingMenuButton.propTypes = {
  mainIcon: PropTypes.node.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      bgColor: PropTypes.string,
      ariaLabel: PropTypes.string,
    })
  ).isRequired,
};

export default FloatingMenuButton;

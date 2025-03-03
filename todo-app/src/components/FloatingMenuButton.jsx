import React, { useState } from "react";
import "../styles/floatingMenuButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "./IconButton";
import PropTypes from "prop-types";

const FloatingMenuButton = ({ mainIcon, items }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="floating-menu-container">
      <div className={`floating-menu ${isExpanded ? "expanded" : ""}`}>
        {isExpanded &&
          items.map((item, index) => (
            <div key={index} className="menu-item" onClick={item.onClick}>
              <IconButton
                key={index}
                icon={item.icon}
                onClick={item.onClick}
                ariaLabel={item.ariaLabel}
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
    })
  ).isRequired,
};
export default FloatingMenuButton;

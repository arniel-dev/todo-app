import React from "react";
import PropTypes from "prop-types";

function Link({ sx, href, target, rel, children, ...props }) {
  const styles = {
    link: {
      ...sx,
      margin: "0.25rem",
    },
  };

  return (
    <a href={href} target={target} rel={rel} style={styles.link} {...props}>
      <span>{children}</span>
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string,
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

export default Link;

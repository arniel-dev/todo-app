import React from "react";
import PropTypes from "prop-types";

function InputField({
  label,
  type = "text",
  placeholder,
  id,
  helperText,
  error,
  fullWidth = true,
  margin = "normal",
  disabled = false,
  ...props
}) {
  const styles = {
    formGroup: {
      position: "relative",
      padding: "20px 0 0",
      marginTop: margin === "normal" ? "10px" : "5px",
      fontFamily: "Roboto, sans-serif",
      width: fullWidth ? "100%" : "auto",
    },
    formField: {
      fontFamily: "inherit",
      width: "100%",
      border: "0",
      borderBottom: `1px solid ${error ? "#d32f2f" : "#d2d2d2"}`,
      outline: "0",
      fontSize: "16px",
      color: "#212121",
      padding: "7px 0",
      background: "transparent",
      transition: "border-color 0.2s",
      cursor: disabled ? "not-allowed" : "text",
      opacity: disabled ? 0.7 : 1,
    },
    formLabel: {
      position: "absolute",
      top: "0",
      display: "block",
      transition: "0.2s",
      fontSize: "16px",
      color: error ? "#d32f2f" : "#9b9b9b",
      pointerEvents: "none",
    },
    errorMessage: {
      color: "#d32f2f",
      fontSize: "0.75rem",
      marginTop: "8px",
      textAlign: "left",
    },
  };

  return (
    <div style={styles.formGroup}>
      <input
        type={type}
        id={id}
        style={styles.formField}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      />
      {label && (
        <label htmlFor={id} style={styles.formLabel}>
          {label}
        </label>
      )}
      {error && <div style={styles.errorMessage}>{helperText}</div>}
    </div>
  );
}

// PropTypes for type checking
InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["text", "email", "password", "number"]),
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  fullWidth: PropTypes.bool,
  margin: PropTypes.oneOf(["normal", "dense"]),
  disabled: PropTypes.bool,
};

export default InputField;

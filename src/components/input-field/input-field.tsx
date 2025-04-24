"use client";
import React, { useState, useRef } from "react";
import "./input-field.css";

interface InputFieldProps {
  placeholder?: string;
  type?: string;
  errorMessage?: string;
  errorPlaceholder?: string;
  onChange?: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder = "",
  type = "text",
  errorMessage,
  errorPlaceholder = "",
  onChange,
}) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const validateInput = (value: string) => {
    if (type === "text" && value.trim() === "") {
      return `${errorMessage || "This field"} cannot be empty`;
    }
    return null;
  };

  const checkInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (onChange) {
      onChange(newValue);
    }

    const validationError = validateInput(newValue);
    setError(validationError);
  };

  const clearError = () => {
    const inputField = document.getElementById("input-field");
    if (inputRef.current && inputRef.current.value === "") {
      setError(null);
    }
  };

  return (
    <div className="input_field_container">
      {error ? (
        <>
          <input
            ref={inputRef}
            id="input-field"
            type={type}
            value={value}
            placeholder={errorPlaceholder}
            // placeholder={error ? "Error occurred!" : placeholder}
            className="input_field input_error"
            onChange={checkInput}
            onBlur={clearError}
          />
          <div className="input_field_error_message">
            <span className="error_message">{error}</span>
          </div>
        </>
      ) : (
        <>
          <input
            ref={inputRef}
            id="input-field"
            type={type}
            value={value}
            placeholder={placeholder}
            // placeholder={error ? "Error occurred!" : placeholder}
            className="input_field"
            onChange={checkInput}
            onBlur={clearError}
          />
        </>
      )}
    </div>
  );
};

export default InputField;

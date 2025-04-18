import React from "react";
import "./input-field.css";

interface InputFieldProps {
    input?: string
    placeholder?: string
    type?: string
}

const InputField: React.FC<InputFieldProps> = ({input, placeholder, type}) =>{
    
    return (
        <><input 
        id="input-field"
        type={type}
        value={input}
        placeholder={placeholder}
        className="input_field"/></>
    )
}

export default InputField;
'use client'
import React, {useState} from "react";
import "./input-field.css";

interface InputFieldProps {
    placeholder?: string
    type?: string
    errorMessage?: string;
    onChange?: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
    placeholder="", 
    type="text", 
    errorMessage,
    onChange
}) => {

    const [value, setValue] = useState('');
    const [error, setError] = useState<string | null>(null);

    const validateInput = (value: string) => {
        if (type === "text" && value.trim() === "") {
            return `${errorMessage || 'This field'} cannot be empty`;
    } 
    return null}

    const checkInput=(e: React.ChangeEvent<HTMLInputElement>) =>{
        const newValue = e.target.value
        setValue(newValue)

        if (onChange) {
            onChange(newValue);
        }

        const validationError = validateInput(newValue);
        setError(validationError);
    }
    
    return (
        <div className="input_field_container">
            <input 
                id="input-field"
                type={type}
                value={value}
                placeholder={placeholder}
                className={`input_field ${error ? "input_error" :""}`}
                onChange={checkInput}/>
        </div>
    )
}

export default InputField;
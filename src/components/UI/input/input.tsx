// Input.tsx
import React from 'react';

// Definir los tipos de input permitidos
type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' ;

interface IInputProps {
    type?: InputType;
    placeholder?: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    id?: string;
    disabled?: boolean;
}

// Componente Input funcional
const Input: React.FC<IInputProps> = ({
    type = 'text',
    placeholder,
    value,
    name,
    onChange,
    label,
    id,
    disabled = false
}) => {
    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                id={id}
                disabled={disabled}
            />
        </div>
    );
};

export default Input;
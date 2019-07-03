import React from 'react';

const TextInput = (props) => {
    const { name, label, onChange, value, type, placeholder, autoFocus } = props;

    return (
        <div className="text-input">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                key={name}
                value={value}
                placeholder={placeholder}
                autoFocus={autoFocus}
                onChange={onChange}
                required
            />
        </div>
    )
}

export default TextInput;
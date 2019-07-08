import React from 'react';
// import { randomKey } from '../../constants/helpers';

const TextInput = (props) => {
    const { name, label, onChange, value, type, placeholder, autoFocus, errors } = props;

    return (
        <div className="text-input">
            <label htmlFor={name}>{label}</label>
            <div name={errors[name]} className={errors[name]?'input':''}>
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
        </div>
    )
}

export default TextInput;
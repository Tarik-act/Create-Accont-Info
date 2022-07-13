import React from 'react';

function Input({ type, name, placeholder, FieldName }) {
  return (
    <div>
      <label htmlFor={name}>{FieldName}</label>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
}

export default Input;

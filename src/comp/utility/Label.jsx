/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import './style/Label.scss';

// Label component
export function Label({
  name, title, type, icon, changeFunction,
}) {
  // Render Label
  return (
    <label htmlFor={name} aria-label={name}>
      {icon}
      <input
        id={name}
        type={type}
        placeholder={title}
        onChange={(e) => changeFunction(e, name)}
      />
    </label>
  );
}

/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import './style/Button.scss';

// Button component
export function Button({
  name, type, icon, clickFunction, showName,
}) {
  // Render Button
  return (
    <button
      type={type}
      aria-label={name}
      onClick={() => clickFunction()}
    >
      {icon}
      {showName ? name : null}
    </button>
  );
}

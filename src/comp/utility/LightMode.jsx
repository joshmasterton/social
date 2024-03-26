/* eslint-disable import/prefer-default-export */
import React from 'react';
import { GiMoon, GiSun } from 'react-icons/gi';
import './style/LightMode.scss';

// Current light mode
export const getLightMode = () => {
  const lightMode = localStorage.getItem('socialLightMode');

  // If no light mode in local storage create it
  if (!lightMode) {
    localStorage.setItem('socialLightMode', 'dark');
    return lightMode;
  }

  // Return light mode
  return lightMode;
};

// Change light mode
export const changeLightMode = () => {
  const lightMode = localStorage.getItem('socialLightMode');

  // Return light mode
  if (lightMode === 'dark') {
    localStorage.setItem('socialLightMode', 'light');
    getLightMode();
    return window.location.reload();
  }

  // Return dark mode
  localStorage.setItem('socialLightMode', 'dark');
  getLightMode();
  return window.location.reload();
};

// LightMode component
export function LightMode() {
  // Render LightMode
  return (
    <button
      type="button"
      aria-label="LightMode"
      className="lightMode"
      onClick={() => changeLightMode()}
    >
      {getLightMode() === 'dark'
        ? <GiMoon />
        : <GiSun />}
    </button>
  );
}

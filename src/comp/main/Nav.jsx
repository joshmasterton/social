/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { GiAlienSkull, GiHamburgerMenu } from 'react-icons/gi';
import { GoHomeFill } from 'react-icons/go';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoExit } from 'react-icons/io5';
import { Button } from '../utility/Button';
import { LightMode } from '../utility/LightMode';
import './style/Nav.scss';

// Nav component
export function Nav() {
  // Check if menu
  const [isMenu, setIsMenu] = useState(false);

  // Navigation location
  const navigate = useNavigate();
  const location = useLocation();

  // Return to auth page
  const logout = () => navigate('/login');

  // Change menu state
  const onChangeMenu = () => {
    if (isMenu) return setIsMenu(false);
    return setIsMenu(true);
  };

  // Current page desktop version
  const currentPageDesktop = () => {
    if (location.pathname === '/') return '-12.175rem';
    return '0rem';
  };

  // Current page mobile version
  const currentPageMobile = () => {
    if (location.pathname === '/') return '0rem';
    return '0rem';
  };

  // Render Nav
  return (
    <nav>
      <main>
        <header>
          <h1>
            <GiAlienSkull />
          </h1>
          <Button
            name="Menu"
            type="button"
            icon={<GiHamburgerMenu />}
            clickFunction={onChangeMenu}
          />
        </header>
        <div
          style={{
            transform: `translateX(${currentPageDesktop()})`,
          }}
        />
        <Button
          name="Home"
          type="button"
          icon={<GoHomeFill />}
        />
        <Button
          name="About"
          type="button"
          icon={<GiAlienSkull />}
        />
        <Button
          name="Logout"
          type="button"
          icon={<IoExit />}
          clickFunction={logout}
        />
        <LightMode />
      </main>
      <footer className={isMenu ? 'active' : 'hidden'}>
        <div
          style={{
            transform: `translateY(${currentPageMobile()})`,
          }}
        />
        <Button
          name="Home"
          type="button"
          icon={<GoHomeFill />}
          showName
        />
        <Button
          name="About"
          type="button"
          icon={<GiAlienSkull />}
          showName
        />
        <Button
          name="Logout"
          type="button"
          icon={<IoExit />}
          clickFunction={logout}
          showName
        />
      </footer>
    </nav>
  );
}

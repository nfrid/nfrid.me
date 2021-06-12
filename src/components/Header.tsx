import React from 'react';
import ToggleTl from './ToggleTl';
import '../styles/Header.scss';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => (
  <div className="Header">
    <ToggleTl />
  </div>
);

export default Header;

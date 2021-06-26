import React from 'react';
import ToggleTl from './ToggleTl';
import '../styles/Header.scss';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => (
  <div className="Header">
    <div className="logo">
      nfrid.me
    </div>
    <ToggleTl />
  </div>
);

export default Header;

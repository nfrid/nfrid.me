import React from 'react';
import ToggleTl from './ToggleTl';
import SectionsMenu from './SectionsMenu';
import '../styles/Header.scss';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => (
  <div className="Header">
    <a className="logo" href="/">
      nfrid.ru
    </a>
    <SectionsMenu />
    <ToggleTl />
  </div>
);

export default Header;

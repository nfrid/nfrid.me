import React from 'react';

import { ToggleTl } from '@/features/Tl';
import SectionsMenu from '@/features/SectionsMenu';

import css from './index.module.scss';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => (
  <div className={css.header}>
    <a className={css.logo} href="/">
      nfrid.me
    </a>
    <SectionsMenu />
    <ToggleTl className={css.toggleTrans} />
  </div>
);

export default Header;

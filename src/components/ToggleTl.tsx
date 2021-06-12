import React, { useContext } from 'react';
import Tl from './Tl';
import TlContext from './TlContext';
import langIco from '../assets/lang.svg';

interface ToggleTlProps {}

/**
 * button component for toggling trans state in TlContext
 * and, therefore, toggling the translation
 */
const ToggleTl: React.FC<ToggleTlProps> = () => {
  const { tl, setTl } = useContext(TlContext);

  return (
    <a className="toggle-trans" onClick={() => setTl(!tl)}>
      <img src={langIco} />
      <br />
      <Tl data="RU">EN</Tl>
    </a>
  );
};

export default ToggleTl;

import React, { useContext } from 'react';
import Tl from './Tl';
import TlContext from './TlContext';

interface ToggleTlProps {}

/**
 * button component for toggling trans state in TlContext
 * and, therefore, toggling the translation
 */
const ToggleTl: React.FC<ToggleTlProps> = () => {
  const { tl, setTl } = useContext(TlContext);

  return (
    <a className="toggle-trans" onClick={() => setTl(!tl)}>
      $LANG: <Tl data="ru">en</Tl>
    </a>
  );
};

export default ToggleTl;

import { HTMLProps, useContext } from 'react';

import Tl from '.';
import TlContext from './TlContext';

/**
 * button component for toggling trans state in TlContext
 * and, therefore, toggling the translation
 */
const ToggleTl = ({
  ...props
}: Omit<HTMLProps<HTMLAnchorElement>, 'onClick'>) => {
  const { tl, setTl } = useContext(TlContext);

  return (
    <a {...props} onClick={() => setTl(!tl)}>
      $LANG: <Tl data="ru">en</Tl>
    </a>
  );
};

export default ToggleTl;

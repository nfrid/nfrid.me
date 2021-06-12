import React, { useContext } from 'react';
import TlContext from './TlContext';

interface TlProps {
  data: string;
}

/**
 * rendering original text or its translation (data prop)
 * depending on the tl state in TlContext
 */
const Tl: React.FC<TlProps> = ({ children, data }) => {
  const { tl } = useContext(TlContext);

  return tl ? <>{data}</> : <>{children}</>;
};

export default Tl;

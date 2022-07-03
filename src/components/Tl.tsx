import React, { useContext } from 'react';
import TlContext from './TlContext';

interface TlProps {
  data: string | React.ReactNode;
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

/**
 * just like Tl component, but not a component.
 * First arg is original, second one is translation
 */
export const tl = (original: string, translation: string) => {
  const { tl } = useContext(TlContext);

  return tl ? translation : original;
};

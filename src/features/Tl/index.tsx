import React, { useContext } from 'react';
import TlContext from './TlContext';

interface TlProps {
  data: string | React.ReactNode;
  children: string | React.ReactNode;
}

/**
 * rendering original text or its translation (data prop)
 * depending on the tl state in TlContext
 */
const Tl = ({ children, data }: TlProps) => {
  const { tl } = useContext(TlContext);

  return tl ? <>{data}</> : <>{children}</>;
};

/**
 * just like Tl component, but not a component.
 * First arg is original, second one is translation
 */
export const tl = (original: string, translation: string) => {
  const { tl } = useContext(TlContext);

  return tl ? translation : original;
};

export default Tl;

export { default as TlContext } from './TlContext';
export { default as ToggleTl } from './ToggleTl';

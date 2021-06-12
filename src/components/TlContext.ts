import { createContext } from 'react';

/**
 * providing context for state hook named tl (translation)
 */
const TlContext = createContext({
  tl: false,
  setTl: (_: boolean) => {},
});

export default TlContext;

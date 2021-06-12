import React, { useState } from 'react';
import Tl from './components/Tl';
import TlContext from './components/TlContext';
import Header from './components/Header';
import './styles/App.scss';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const navLangIsRu = navigator.language.slice(0, 2) == 'ru';
  const [tl, setTl] = useState(navLangIsRu);
  const context = { tl, setTl };

  return (
    <TlContext.Provider value={context}>
      <div className="App">
        <Header />
        <Tl data="Привет, Мир!">Hello, World!</Tl>
      </div>
    </TlContext.Provider>
  );
};

export default App;

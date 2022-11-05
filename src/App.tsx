import { useState } from 'react';

import { TlContext } from '@/features/Tl';
import Header from '@/features/Header';

import Content from './content';

const App = () => {
  const navLangIsRu = navigator.language.slice(0, 2) == 'ru';
  const [tl, setTl] = useState(navLangIsRu);
  const context = { tl, setTl };

  return (
    <TlContext.Provider value={context}>
      <div className="App">
        <Header />
        <Content />
      </div>
    </TlContext.Provider>
  );
};

export default App;

import React from 'react';
import { tl } from './Tl'
import '../styles/Content.scss';

const Content = () => (
  <div className="Content" id="sectionContainer">
    <div id={tl("Top", "Верх")}>
      <h1>Top</h1>
      Elit corrupti esse doloribus ducimus eius Delectus soluta ipsa repellendus
      ex maiores. Veritatis sequi cum nihil totam repellat. Amet porro nulla
      necessitatibus et quod doloremque Cupiditate delectus minima molestias
      impedit.
      <br />
      <br />
    </div>
    <div id={tl("First", "Первый")}>
      <h1>Section 1</h1>
      Elit corrupti esse doloribus ducimus eius Delectus soluta ipsa repellendus
      ex maiores. Veritatis sequi cum nihil totam repellat. Amet porro nulla
      necessitatibus et quod doloremque Cupiditate delectus minima molestias
      impedit.
      <br />
      <br />
    </div>
    <div id={tl("Second", "Второй")}>
      <h1>Section 2</h1>
      Elit corrupti esse doloribus ducimus eius Delectus soluta ipsa repellendus
      ex maiores. Veritatis sequi cum nihil totam repellat. Amet porro nulla
      necessitatibus et quod doloremque Cupiditate delectus minima molestias
      impedit.
      <br />
      <br />
    </div>
    <div id={tl("Third", "Третий")}>
      <h1>Section 3</h1>
      Elit corrupti esse doloribus ducimus eius Delectus soluta ipsa repellendus
      ex maiores. Veritatis sequi cum nihil totam repellat. Amet porro nulla
      necessitatibus et quod doloremque Cupiditate delectus minima molestias
      impedit.
      <br />
      <br />
    </div>
  </div>
);
export default Content;

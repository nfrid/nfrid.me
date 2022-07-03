import React from 'react';
import Tl, { tl } from './Tl';
import '../styles/Content.scss';

const Content = () => (
  <div className="Content" id="sectionContainer">
    <div id={tl('Me', 'Обо мне')} className="container">
      <h2>
        <Tl data="Добро пожаловать на мой вебсайт!">Welcome to my website!</Tl>
      </h2>
      <Tl
        data={
          <>
            <p>
              Я (веб)-разработчик, писатель буквами и гордый пользователь Arch
              Linux btw.
            </p>
            <p>Прикрываюсь псевдонимами Ник Пятница и undefined.</p>
          </>
        }
      >
        <p>
          I am a (web)-developer, a Russian writer and a proud user of Arch
          Linux btw.
        </p>
        <p>My nickname is Nick Friday a.k.a. undefined.</p>
      </Tl>
      <br />
      <div className="refs">
        <h3>
          <Tl data="Полезные ссылки:">Useful links:</Tl>
        </h3>
        <ul>
          <li>
            <a target="_blank" href="https://github.com/NFrid">
              <Tl data="Страница на Гитхабе">GitHub page</Tl>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/NFrid/nfrid.ru">
              <Tl data="Репозиторий этого сайта">This site's repo</Tl>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://mastodon.ml/@nf">
              Mastodon
            </a>
          </li>
          <li>
            <a target="_blank" href="https://t.me/nfrid5">
              Telegram
            </a>
          </li>
          <li>
            <a target="_blank" href="https://dev.to/nfrid">
              Dev.to
            </a>
          </li>
          <li>
            <a target="_blank" href="https://litmarket.ru/nick-friday-p78868">
              <Tl data="Литмаркет">Litmarket</Tl>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div id={tl('Projects', 'Проекты')} className="container">
      <h2>
        <Tl data="Гикование">Geek stuff</Tl>
      </h2>
      <ul>
        <li>
          <a target="_blank" href="https://github.com/NFrid/.dot">
            <Tl data="Мои чудесные дотфайлы (конфиги)">
              My wonderful dotfiles (configs)
            </Tl>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/NFrid/nwm">
            <Tl data="Мой оконный менеджер на основе dwm">
              My dwm-based window manager
            </Tl>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/NFrid/nvim">
            <Tl data="Моя идеальная конфигурация neovim">
              My perfect neovim config
            </Tl>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/NFrid/due.nvim">
            <Tl data="Маленький neovim плагин">Lil neovim plugin</Tl>
          </a>
        </li>
      </ul>
      <h2>
        <Tl data="Вебсайты">Websites</Tl>
      </h2>
      <ul>
        <li>
          <a target="_blank" href="https://github.com/NFrid/nfrid.ru">
            <Tl data="Этот вебсайт">This website</Tl>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/NFrid/nfrid.me-gatsby">
            <Tl data="Старый вебсайт (на Gatsby)">Old website (on Gatsby)</Tl>
          </a>
        </li>
      </ul>
      <h2>
        <Tl data="Тестовые задания (front-end)">Front-end test cases</Tl>
      </h2>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://github.com/NFrid/randomusers-test-case"
          >
            <Tl data="Работа с Randomusers API">
              Working with Randomusers API
            </Tl>
          </a>
        </li>
      </ul>
    </div>
    <div id={tl('About', 'О сайте')} className="container">
      <h1>
        <Tl data="Сайт всё ещё в процессе разработки">
          The website is still work-in-progress
        </Tl>
      </h1>
      <p>
        <Tl data="Информация активно дополняется (когда мне не лень).">
          The information is actively updated (when I'm not lazy).
        </Tl>
      </p>
      <h1>
        <Tl data="Оставайтесь на связи 👽">Stay tuned 👽</Tl>
      </h1>
    </div>
  </div>
);
export default Content;

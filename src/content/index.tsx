import Tl, { tl } from '@/features/Tl';

import css from './index.module.scss';

const Content = () => (
  <div className={css.content} id="sectionContainer">
    <div id={tl('Me', 'Обо мне')} className={css.container}>
      <h2>
        <Tl data="Добро пожаловать на мой вебсайт!">Welcome to my website!</Tl>
      </h2>
      <Tl
        data={
          <>
            <p>
              Я (веб)-разработчик, писатель буквами, продюссер UTAU и гордый
              пользователь Arch Linux btw.
            </p>
            <p>Прикрываюсь псевдонимами Ник Пятница и undefined.</p>
          </>
        }
      >
        <p>
          I am a (web)-developer, a Russian writer, an UTAU producer and a proud
          user of Arch Linux btw.
        </p>
        <p>My nickname is Nick Friday a.k.a. undefined.</p>
      </Tl>
      <br />
      <div className={css.refs}>
        <h3>
          <Tl data="Полезные ссылки:">Useful links:</Tl>
        </h3>
        <ul>
          <li>
            <a target="_blank" href="https://github.com/nfrid">
              <Tl data="Страница на Гитхабе">GitHub page</Tl>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/nfrid/nfrid.me">
              <Tl data="Репозиторий этого сайта">This site's repo</Tl>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://mastodon.ml/@nf">
              Mastodon
            </a>
          </li>
          <li>
            <a target="_blank" href="https://youtube.com/@fridayp">
              YouTube (UTAU)
            </a>
          </li>
          <li>
            <a target="_blank" href="https://soundcloud.com/nfrid">
              SoundCloud
            </a>
          </li>
          <li>
            <a target="_blank" href="https://t.me/nfrid5">
              Telegram
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div id={tl('Projects', 'Проекты')} className={css.container}>
      <h2>
        <Tl data="Гикование">Geek stuff</Tl>
      </h2>
      <ul>
        <li>
          <a target="_blank" href="https://github.com/nfrid/.dot">
            <Tl data="Мои чудесные дотфайлы (конфиги)">
              My wonderful dotfiles (configs)
            </Tl>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/nfrid/nwm">
            <Tl data="Мой оконный менеджер на основе dwm">
              My dwm-based window manager
            </Tl>
          </a>
        </li>
      </ul>
      <h2>Neovim</h2>
      <ul>
        <li>
          <a target="_blank" href="https://github.com/nfrid/nvim">
            <Tl data="Моя идеальная конфигурация">My perfect config</Tl>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/nfrid/due.nvim">
            <Tl data="Плагин для отображения крайнего срока в markdown">
              A plugin to display due dates in markdown
            </Tl>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/nfrid/treesitter-utils">
            <Tl data="Набор полезных методов для работы с treesitter">
              Some treesitter methods to reduce my suffering
            </Tl>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://github.com/nfrid/markdown-togglecheck"
          >
            <Tl data="До тупости простой плагин для переключения чекбоксов в markdown">
              A stupidly simple plugin to toggle markdown check boxes
            </Tl>
          </a>
        </li>
      </ul>
      <h2>
        <Tl data="Вебсайты">Websites</Tl>
      </h2>
      <ul>
        <li>
          <a target="_blank" href="https://github.com/nfrid/nfrid.me">
            <Tl data="Этот вебсайт">This website</Tl>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/nfrid/nfrid.me-gatsby">
            <Tl data="Старый вебсайт (на Gatsby)">Old website (on Gatsby)</Tl>
          </a>
        </li>
      </ul>
      <h2>
        <Tl data="Тестовые задания на фронт">Front-end test cases</Tl>
      </h2>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://github.com/nfrid/randomusers-test-case"
          >
            <Tl data="Работа с Randomusers API">
              Working with Randomusers API
            </Tl>
          </a>
        </li>
      </ul>
    </div>
    <div id={tl('Art stuff', 'Творчество')} className={css.container}>
      <h2>
        <Tl data="Музыка">Music</Tl>
      </h2>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=KOQOR03IDg0"
          >
            Kikuo — Любите меня (UTAU RUS cover) ft. AICA
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=tAWQZXjuOik"
          >
            Kikuo — Хороводы мертвецов (UTAU RUS cover) ft. AICA
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=xaqs1vGXUxs"
          >
            Kikuo — Торговка бедой (UTAU RUS cover) ft. AICA
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=uaNtR-P_s6k"
          >
            Kikuo — Облезлый кот (UTAU RUS cover) ft. AICA
          </a>
        </li>
      </ul>
    </div>
    <div id={tl('About', 'О сайте')} className={css.container}>
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

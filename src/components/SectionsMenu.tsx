import React, { useState, useEffect, useContext } from 'react';
import SectionsMenuItem from './SectionsMenuItem';
import TlContext from './TlContext';

interface ISectionsMenu {
  items?: string[];
}

/**
 * anchor links with dynamic active state, items prop
 * is an array of anchor ids, no items prop means all
 * the divs ids in an element with id 'sectionContainer'
 */
const SectionsMenu: React.FC<ISectionsMenu> = ({ items }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const { tl } = useContext(TlContext);

  const getItems = () => {
    if (items) return items;
    const children = document.getElementById('sectionContainer')?.children;
    if (!children) return [];

    let ids: string[] = [];
    for (let i = 0; i < children!.length; i++) ids.push(children[i].id);

    return ids;
  };

  useEffect(() => {
    const itemList = makeItemList(getItems());
    getAnchorPoints(itemList);
    const handleScrollCallback = () => {
      handleScroll(itemList);
    };
    window.addEventListener('scroll', handleScrollCallback);

    return () => {
      window.removeEventListener('scroll', handleScrollCallback);
    };
  }, [tl, document.documentElement.clientHeight]);

  const makeItemList = (items: string[]): { [index: string]: number } => {
    return items.reduce((acc, val) => ({ ...acc, [val]: 0 }), {});
  };

  const getAnchorPoints = (itemList: { [index: string]: number }) => {
    for (const key in itemList) {
      itemList[key] =
        document.getElementById(key)!.getBoundingClientRect().top +
        window.scrollY -
        document.documentElement.clientHeight / 3;
    }
    handleScroll(itemList);
  };

  const handleScroll = (itemList: { [index: string]: number }) => {
    let prev = null;
    for (const section in itemList) {
      if (itemList[section] >= window.scrollY) {
        if (prev !== activeItem) {
          setActiveItem(prev);
        }
        break;
      }
      prev = section;
    }
    setActiveItem(prev);
  };

  const menuList = getItems().map((e, i) => (
    <SectionsMenuItem
      itemName={e}
      key={`menuitem_${i}`}
      active={e === activeItem}
    />
  ));

  return (
    <section>
      <ul>{menuList}</ul>
    </section>
  );
};

export default SectionsMenu;

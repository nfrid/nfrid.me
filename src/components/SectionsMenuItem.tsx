import React, { useState, useEffect } from 'react';

interface SectionsMenuItemProps {
  itemName: string,
  active: boolean
}

const SectionsMenuItem: React.FC<SectionsMenuItemProps> = ({ itemName, active }) => {
  const [anchorTarget, setAnchorTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById(itemName));
  }, [itemName]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    anchorTarget?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <li>
      <a href={`#${itemName}`}
         onClick={handleClick}
         className={active ? 'Active' : ''}>
        {itemName}
      </a>
    </li>
  );
};

export default SectionsMenuItem;

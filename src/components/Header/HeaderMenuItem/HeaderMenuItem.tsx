import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';

import { FiChevronDown } from "react-icons/fi";
import styles from './HeaderMenuItem.module.scss';

interface HeaderLink {
  text: string;
  url: string;
  submenu?: HeaderLink[];
};

export const HeaderMenuItem = ({ link }: { link: HeaderLink }) => {
  const { text, url, submenu } = link;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('click', handler);

    return () => {
      window.removeEventListener('click', handler);
    };
  });

  if (!submenu) {
    return (
      <li className={styles.item}>
        <NavLink to={url}
          className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : `${styles.link} `)}
        >
          {text}
        </NavLink>
      </li>
    )
  }

  return (
    <li className={styles.item}>
      <button
        ref={menuRef}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className={styles.link}
      >
        {text}
        <span className={`${styles.arrow} ${isMenuOpen ? styles.active : ''}`} >
          <FiChevronDown size={20} />
        </span>
      </button>

      {isMenuOpen && (
        <ul className={styles.submenu}>
          {link.submenu?.map(({ text, url }) => (
            <li key={text}>
              <Link to={url} className={styles.link}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};


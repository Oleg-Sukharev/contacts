import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { BsCart2 } from "react-icons/bs";
import Container from "@/components/Container/Container"
import { GoPerson } from "react-icons/go";
import { GrClose } from "react-icons/gr";
import { HEADER_MENU } from "@/constants/constants"
import { HeaderMenuItem } from "./HeaderMenuItem/HeaderMenuItem"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Logo from "@/assets/logo.svg?react"
import classes from "./Header.module.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const body = document.body;
    body.classList.toggle("overflowHidden", isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`${classes.header} ${isMenuOpen ? classes.active : ""}`}>
      <Container className={classes.headerInner}>
        <div className={classes.top}>
          <div className={classes.logo}>
            <Logo />
          </div>
          <button className={classes.menuBtn} onClick={() => setIsMenuOpen((prev) => !prev)} area-label={isMenuOpen ? "close menu" : 'open menu'}>
            {isMenuOpen ? <GrClose size={24} /> : <HiOutlineMenuAlt3 size={24} />}
          </button>
        </div>

        <nav className={classes.menu} aria-label="Main" role='navigation'>
          <div className={classes.menuInner}>

            <ul className={classes.menuLinks}>
              {HEADER_MENU.map((link) => (
                <HeaderMenuItem key={link.text} link={link} />
              ))}
            </ul>
            <div className={classes.profile}>
              <Link className={classes.profileItem} to="/cart" area-label='Basket'>
                <GoPerson
                  size={22}
                />
              </Link>
              <Link className={classes.profileItem} to="/profile" area-label='Profile'>
                <BsCart2
                  size={18}
                />
              </Link>
            </div>
          </div>
        </nav>
      </Container>
    </header >
  );
};

export default Header;
import ContactList from '@/components/ContactList/ContactList'
import Container from "@/components/Container/Container"
import { FOOTER_MENU } from "@/constants/constants"
import Logo from "@/assets/logo.svg?react"
import SubscribeForm from "./SubscribeForm/SubscribeForm"
import classes from "./footer.module.scss"

interface Column {
  title: string;
  links: ColumnLink[];
};

interface ColumnLink {
  title: string;
  link: string;
}

// could create separated component - LinkList

const LinkList: React.FC<Column> = ({ title, links }) => (
  <div className={classes.linksColumn}>
    <h3 className={classes.subtitle}>{title}</h3>
    <ul className={classes.list}>
      {links.map((link, index) => (
        <li className={classes.link} key={index}>
          {link.title}
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container>
        <div className={classes.logo}>
          <Logo />
        </div>
        <div className={classes.inner}>

          <div className={classes.linksColumn}>
            <h3 className={classes.subtitle}>Reach us</h3>
            <ContactList className={classes.list} />
          </div>

          {FOOTER_MENU.map((menu, index) => (
            <LinkList key={index} title={menu.title} links={menu.links} />
          ))}

          <div className={`${classes.linksColumn} ${classes.form}`}>
            <h3 className={classes.subtitle}>Join Our Newsletter</h3>
            <SubscribeForm />
          </div>
        </div>
      </Container>
    </footer >
  );
};

export default Footer;
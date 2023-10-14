import { CONTACTS } from "@/constants/constants"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { RiMailFill } from "react-icons/ri";
import classes from "./ContactList.module.scss";

interface SocialsProps {
  className?: string;
};

const ContactList: React.FC<SocialsProps> = ({ className }) => {
  const { phone, email, address } = CONTACTS;

  return (
    <ul className={`${classes.list} ${className}`}>
      {phone && (
        <li className={classes.item}>
          <a
            className={`${classes.item} ${classes.link}`}
            href={`tel:${phone}`}
          >
            <span className={classes.icon}>
              <FaPhoneVolume size={16} />
            </span>
            {phone}
          </a>
        </li>
      )}

      {email && (
        <li className={classes.item}>
          <a
            className={`${classes.item} ${classes.link}`}
            href={`mailto:${email}`}
          >
            <span className={classes.icon}>
              <RiMailFill size={20} />
            </span>
            {email}
          </a>
        </li>
      )}

      {address && (
        <li className={classes.item}>
          <span className={classes.icon}>
            <FaLocationDot size={20} />
          </span>
          {address}
        </li>
      )}
    </ul>
  );
};

export default ContactList;
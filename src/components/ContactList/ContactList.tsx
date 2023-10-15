import { BiSolidPhoneCall } from "react-icons/bi";
import { CONTACTS } from "@/constants/constants"
import { HiLocationMarker } from "react-icons/hi";
import { RiMailFill } from "react-icons/ri";
import classes from "./ContactList.module.scss";
interface SocialsProps {
  className?: string;
};

const ContactList: React.FC<SocialsProps> = ({ className = "" }) => {
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
              <BiSolidPhoneCall size={24} />
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
              <RiMailFill size={22} />
            </span>
            {email}
          </a>
        </li>
      )}

      {address && (
        <li className={classes.item}>
          <span className={classes.icon}>
            <HiLocationMarker size={22} />
          </span>
          {address}
        </li>
      )}
    </ul>
  );
};

export default ContactList;
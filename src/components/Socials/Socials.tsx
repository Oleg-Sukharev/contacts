import { BiLogoDiscordAlt, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";

import { SOCIALS } from "@/constants/constants"
import classes from "./socials.module.scss";

interface SocialsProps {
  className?: string;
};

interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, label, icon }) => (
  <li>
    <a className={classes.item} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  </li>
);

const Socials: React.FC<SocialsProps> = ({ className = "" }) => {
  return (
    <ul className={`${classes.list} ${className}`}>
      <SocialLink href={SOCIALS.twitter} label="Twitter" icon={<BiLogoTwitter size={20} />} />
      <SocialLink href={SOCIALS.instagram} label="Instagram" icon={<BiLogoInstagram size={20} />} />
      <SocialLink href={SOCIALS.discord} label="Discord" icon={<BiLogoDiscordAlt size={20} />} />
    </ul>
  );
};

export default Socials;

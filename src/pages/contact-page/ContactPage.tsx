import ContactForm from "./ContactForm/ContactForm"
import ContactList from '@/components/ContactList/ContactList'
import Container from "@/components/Container/Container"
import Heading from '@/components/Heading/Heading'
import Socials from '@/components/Socials/Socials'
import classes from "./ContactPage.module.scss"

const ContactsPage = () => {
  return (
    <Container small>
      <Heading title="Contact Us">
        <div className={classes.description}>
          Any question or remarks?  Just write us a message!
        </div>
      </Heading>

      <div className={classes.wrapper}>
        <div className={classes.info}>
          <div>
            <h2 className={classes.title}>Contact Information</h2>
            <div className={classes.subtitle}>Say something to start a live chat!</div>
          </div>
          <ContactList />
          <Socials className={classes.socials} />
        </div>
        <ContactForm />
      </div>
    </Container>
  );
}

export default ContactsPage;

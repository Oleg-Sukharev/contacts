import Button from "../UI/Button/Button";
import Heading from '../Heading/Heading'
import classes from "./EmptyPage.module.scss"
import { useNavigate } from "react-router-dom"

interface EmptyPageProps {
  title: string;
  subtitle?: string;
}

// simple component to handle error pages

const EmptyPage: React.FC<EmptyPageProps> = ({
  title,
  subtitle
}) => {
  const navigate = useNavigate();

  return (
    <div className={classes.wrapper}>
      <Heading title={title}>
        {subtitle && <>{subtitle}</>}
      </Heading>

      <Button onClick={() => navigate("/contact")}>
        Home page
      </Button>
    </div>
  );
};

export default EmptyPage;

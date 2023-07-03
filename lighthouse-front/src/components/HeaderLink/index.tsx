import { Link } from "react-scroll";
import { LinkButton } from "./styles";

type HeaderLinkProps = {
  children: React.ReactNode;
  isActive?: boolean;
  to: string;
  onClick?: () => void;
};

const HeaderLink: React.FC<HeaderLinkProps> = ({
  children,
  isActive = false,
  to,
  onClick,
}) => {
  const borderBottom = isActive ? "2px solid #dbc68f" : "";

  return (
    <Link
      activeClass="active"
      onClick={onClick}
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      <LinkButton style={{ borderBottom }}>{children}</LinkButton>
    </Link>
  );
};

export default HeaderLink;

import { Link } from "react-scroll";
import { LinkButton } from "./styles";

type HeaderLinkProps = {
  children: React.ReactNode;
  isActive?: boolean;
  to: string;
  isBlog?: boolean;
  onClick?: () => void;
};

const HeaderLink: React.FC<HeaderLinkProps> = ({
  children,
  isActive = false,
  to,
  isBlog,
  onClick,
}) => {
  const borderBottom = isActive ? "2px solid #dbc68f" : "";
  const o = () => {
    if (onClick) onClick();
  };
  if (isBlog) {
    return (
      <a
        style={{ textDecoration: "none" }}
        target="_blank"
        href="https://blog.lighthouseinvestimentos.com/"
        rel="noreferrer"
      >
        <LinkButton style={{ borderBottom }}>{children}</LinkButton>
      </a>
    );
  }
  return (
    <Link
      activeClass="active"
      onClick={o}
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

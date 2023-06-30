("");

import { LinkButton } from "./styles";

type HeaderLinkProps = {
  children: React.ReactNode;
  isActive?: boolean;
};

export default function HeaderLink({
  children,
  isActive = false,
}: HeaderLinkProps) {
  const borderBottom = isActive ? "2px solid #dbc68f" : "";
  return <LinkButton style={{ borderBottom }}>{children}</LinkButton>;
}

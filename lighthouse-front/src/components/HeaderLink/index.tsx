"use-client";
type HeaderLinkProps = {
  children: React.ReactNode;
  isActive?: boolean;
};

export default function HeaderLink({
  children,
  isActive = false,
}: HeaderLinkProps) {
  return (
    <button
      className={`text-secondary bg-transparent font-bold p-nano ${
        isActive ? "border-b-2 border-secondary" : ""
      } hover:border-b-2 border-secondary`}
    >
      {children}
    </button>
  );
}

"use-client";
import HeaderLink from "../HeaderLink";

export default function Header() {
  return (
    <header className="bg-primary h-xxxl border-b-8 border-secondary flex items-center justify-between py-lg px-lg w-full fixed	">
      <h1
        className="text-secondary"
        style={{ font: "normal normal normal 30px Aboreto" }}
      >
        LIGHTHOUSE
      </h1>
      <div className="flex items-center gap-xxxs">
        <HeaderLink isActive>Home</HeaderLink>
        <HeaderLink>Quem Somos</HeaderLink>
        <HeaderLink>Soluções</HeaderLink>
        <HeaderLink>Metodologia</HeaderLink>
        <HeaderLink>Blog</HeaderLink>
      </div>
      <button className="text-black bg-secondary p-4 px-sm rounded font-bold hover:bg-secondaryDarker ">
        Contato
      </button>
    </header>
  );
}

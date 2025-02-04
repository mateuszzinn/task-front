"use client";
import MenuLink from "../menuLink/MenuLink";

export default function NavBar() {
  return (
    <>
      <nav className="h-20 flex items-center justify-between px-4 gap-4">        
        <MenuLink texto="Home" href="/" />
        <MenuLink texto="Casas" href="/casas" />
        <MenuLink texto="Westeros" href="/westeros" />
      </nav>
    </>
  );
}

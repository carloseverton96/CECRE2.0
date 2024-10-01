"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const MENU = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Botão do hamburger menu para telas pequenas */}
      <Button variant="ghost" onClick={toggleMenu} className="md:hidden">
        {isOpen ? <X /> : <Menu />}
      </Button>

      {/* Menu deslizante para dispositivos móveis */}
      <div className={`fixed top-0 left-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
        <div className="flex flex-col p-4">
          <Button variant={pathname === "/" ? "outline" : "secondary"} asChild onClick={closeMenu}>
            <Link href="/">INÍCIO</Link>
          </Button>
          <Button variant={pathname === "/publicas" ? "outline" : "secondary"} asChild onClick={closeMenu}>
            <Link href="/publicas">ATIVIDADES PÚBLICAS</Link>
          </Button>
          <Button variant={pathname === "/educacionais" ? "outline" : "secondary"} asChild onClick={closeMenu}>
            <Link href="/educacionais">ATIVIDADES EDUCACIONAIS</Link>
          </Button>
          <Button variant={pathname === "/mediunicas" ? "outline" : "secondary"} asChild onClick={closeMenu}>
            <Link href="/mediunicas">ATIVIDADES MEDIÚNICAS</Link>
          </Button>
          <Button variant={pathname === "/sociais" ? "outline" : "secondary"} asChild onClick={closeMenu}>
            <Link href="/sociais">ATIVIDADES SOCIAIS</Link>
          </Button>
          <Button variant={pathname === "/biografias" ? "outline" : "secondary"} asChild onClick={closeMenu}>
            <Link href="/biografias">BIOGRAFIAS</Link>
          </Button>
        </div>
      </div>

      {/* Menu para dispositivos maiores */}
      <div className="hidden md:flex md:flex-wrap justify-center mb-2">
        <Button variant={pathname === "/" ? "outline" : "secondary"} asChild>
          <Link href="/">INÍCIO</Link>
        </Button>
        <Button variant={pathname === "/publicas" ? "outline" : "secondary"} asChild>
          <Link href="/publicas">ATIVIDADES PÚBLICAS</Link>
        </Button>
        <Button variant={pathname === "/educacionais" ? "outline" : "secondary"} asChild>
          <Link href="/educacionais">ATIVIDADES EDUCACIONAIS</Link>
        </Button>
        <Button variant={pathname === "/mediunicas" ? "outline" : "secondary"} asChild>
          <Link href="/mediunicas">ATIVIDADES MEDIÚNICAS</Link>
        </Button>
        <Button variant={pathname === "/sociais" ? "outline" : "secondary"} asChild>
          <Link href="/sociais">ATIVIDADES SOCIAIS</Link>
        </Button>
        <Button variant={pathname === "/biografias" ? "outline" : "secondary"} asChild>
          <Link href="/biografias">BIOGRAFIAS</Link>
        </Button>
      </div>
    </div>
  );
};

export default MENU;

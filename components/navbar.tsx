"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: 'Sobre Mí', href: '#about' },
        { name: 'Habilidades', href: '#skills' },
        { name: 'Proyectos', href: '#projects' },
        { name: 'Contacto', href: '#contact' },
      ];

      return(
        <header className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled?'bg-background/80 backdrop-blur-md border-b':'bg-transparent'}`}>
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="font-bold font-[family-name:var(--font-inter)] text-xl transition-colors hover:text-primary">
                Portfolio
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
      )
}

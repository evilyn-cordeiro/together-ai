"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "../Toggle";
import gsap from "gsap";
import LogoTogether from "../LogoTogether";

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      const header = document.querySelector("header");

      if (!header) return;

      const scrollY = window.scrollY;

      if (scrollY > 50) {
        gsap.to(header, { opacity: 0, y: -100, duration: 0.1 });
      } else {
        gsap.to(header, { opacity: 1, y: 0, duration: 0.2 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <header className="bg-header fixed w-full top-0 left-0 z-10 transition-all duration-300 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <LogoTogether />
            </Link>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;

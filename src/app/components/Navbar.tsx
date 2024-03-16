"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";
import 'animate.css';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Furnitures", href: "/furnitures" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];
export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log('clicked')
  }
  return (
    <nav className="p-10 flex items-center justify-between">
      {/* logo area */}
      <div className="logo">
        <Link href="/">
          <h2 className="font-extrabold text-2xl bg-gradient-to-r from-custom-green to-custom-orange text-transparent bg-clip-text">
            EDGECUT
          </h2>
        </Link>
      </div>

      {/* hamburger menu */}
      <div className="burger text-3xl lg:hidden sm:absolute sm:right-10 cursor-pointer">
        <FaBars onClick={toggleMenu} />
      </div>

      {/* navbar items */}
      <div className={`uppercase lg:flex items-center gap-4 ${isOpen ? 'sm:flex sm:flex-col sm:absolute sm:items-center sm:left-0 sm:right-0 sm:top-28 animate__animated animate__slideInRight' : 'hidden'}`}>
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              href={link.href}
              key={link.name}
              className={isActive ? "font-bold" : "font-normal"}
            >
              {link.name}
            </Link>
          );
        })}

        {/*mobile authentication section */}
        <section className="auth flex items-center gap-5 lg:hidden sm:flex-col">
          <Link href="/login">
            <button className="uppercase border-solid px-4 py-2 border-black border-[1px] rounded-md hover:bg-black hover:text-white">
              Login
            </button>
          </Link>
          <Link href="/register">
            <button className="uppercase border-solid px-4 py-2 border-black border-[1px] rounded-md hover:bg-black hover:text-white">
              Register
            </button>
          </Link>
        </section>
      </div>

      {/* authentication section */}
      <section className="auth lg:flex lg:items-center lg:gap-5 sm:hidden">
        <Link href="/login">
          <button className="uppercase border-solid px-4 py-2 border-black border-[1px] rounded-md hover:bg-black hover:text-white">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className="uppercase border-solid px-4 py-2 border-black border-[1px] rounded-md hover:bg-black hover:text-white">
            Register
          </button>
        </Link>
      </section>
    </nav>
  );
}

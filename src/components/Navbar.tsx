import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TerminalIcon, MenuIcon, XIcon } from 'lucide-react';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Skills',
    href: '#skills'
  },
  {
    name: 'Experience',
    href: '#experience'
  },
  {
    name: 'Projects',
    href: '#projects'
  },
  {
    name: 'Contact',
    href: '#contact'
  }];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white/90 backdrop-blur-md border-gray-200 py-4 shadow-sm' : 'bg-transparent border-transparent py-6'}`}>
      
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          {/* <TerminalIcon className="w-6 h-6 text-primary group-hover:text-primaryHover transition-colors" /> */}
          <span className="font-mono font-bold text-lg tracking-tight text-gray-900">
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            
              {link.name}
            </a>
          )}
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-mono font-medium text-primary border border-primary/30 rounded hover:bg-primary/10 transition-colors">
            
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-500 hover:text-gray-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu">
          
          {mobileMenuOpen ?
          <XIcon className="w-6 h-6" /> :

          <MenuIcon className="w-6 h-6" />
          }
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen &&
      <motion.div
        initial={{
          opacity: 0,
          y: -20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        exit={{
          opacity: 0,
          y: -20
        }}
        className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 py-4 px-6 flex flex-col gap-4 shadow-xl">
        
          {navLinks.map((link) =>
        <a
          key={link.name}
          href={link.href}
          onClick={() => setMobileMenuOpen(false)}
          className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors">
          
              {link.name}
            </a>
        )}
        </motion.div>
      }
    </header>);

}
'use client';

import { useState, useEffect }  from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const hamburger = document.getElementById('hamburger');
            const menu = document.getElementById('menu');
            if (
                hamburger && menu && !hamburger.contains(event.target as Node) &&
                !menu.contains(event.target as Node) && menuOpen
            ) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <nav className="w-full fixed top-0 bg-white z-50 dark:bg-discord-lighter-gray">
        <div className="container mx-auto py-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
            <Link href="/">
                <Image 
                className="w-8" 
                src="/images/logo.png" 
                alt="logo" 
                width={32} 
                height={32} 
                />
            </Link>
            <span className="text-2xl font-bold text-slate-800 dark:text-white"></span>
            </div>
            <ul className="hidden md:flex space-x-20 text-white dark:text-gray-100 font-bold text-sm uppercase">
            <li className="hover:text-light-orange-10">
                <Link href="/#about">About Me</Link>
            </li>
            <li className="hover:text-light-orange-10">
                <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:text-light-orange-10">
                <Link href="/#personal-projects">Projects</Link>
            </li>
            <li className="hover:text-light-orange-10">
                <Link href="/funstuff">Fun Stuff!</Link>
            </li>
            <li className="hover:text-light-orange-10">
                <Link href="/contact">Contact</Link>
            </li>
            </ul>
            <div 
            id="hamburger" 
            className="space-y-1 md:hidden cursor-pointer z-20"
            onClick={toggleMenu}
            >
            <div className="w-6 h-0.5 bg-light-orange-10"></div>
            <div className="w-6 h-0.5 bg-light-orange-10"></div>
            <div className="w-6 h-0.5 bg-light-orange-10"></div>
            </div>
            <ul 
            id="menu"
            className={`${
                menuOpen ? 'block' : 'hidden'
            } bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center`}
            >
            <li>
                <Link href="/#about" id="hLink" onClick={() => setMenuOpen(false)}>About Me</Link>
            </li>
            <li>
                <Link href="/blog" id="hLink" onClick={() => setMenuOpen(false)}>Blog</Link>
            </li>
            <li>
                <Link href="/#personal-projects" id="hLink" onClick={() => setMenuOpen(false)}>Projects</Link>
            </li>
            <li>
                <Link href="/contact" id="hLink" onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
            </ul>
        </div>
        </nav>
    );
}

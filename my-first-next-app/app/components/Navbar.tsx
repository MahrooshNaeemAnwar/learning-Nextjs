"use client";

import Link from "next/link";
import { useState } from "react";


export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false);
  return(
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
         <div className="text-2xl font-bold">Logo </div>
      {/*Desktop menu */}
      <div className="hidden md:flex gap-6">
        <Link href="/home" className="hover:text-gray-300">Home</Link>
        <Link href="/about" className="hover:text-gray-300">About</Link>
        <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        <Link href='/blog' className="hover:text-gray-300">Blog</Link>
      </div>
      {/*Mobile menu button */}
      <button className="md:hidden" onClick={()=>setIsOpen(!isOpen)}>
        ({isOpen ? "Close" : "Menu"})
      </button>
    </div>     
    (isOpen && 
    <div className="md:hidden mt-4 space-y-2">
      <Link href="/home" className="block py-2 hover:text-gray-300">Home</Link>
      <Link href="/about" className="block py-2 hover:text-gray-300">About</Link>
      <Link href="/contact" className="block py-2 hover:text-gray-300">Contact</Link>
      <Link href='/blog' className="block py-2 hover:text-gray-300">Blog</Link>
    </div>
    )   
    </nav>
  );
}


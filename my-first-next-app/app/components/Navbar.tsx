"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar(){
  return(
  <nav className="bg-gray-900 text-white">
   <div className="max-w-6xl mx-auto px-4 py-4">
    <div className="flex justify-between items-center">
      <Link href ="/" className="text-4xl font-bold mb-4">MySite</Link>
      <div className="flex gap-6">
        <Link href="/" className="text-gray-200 hover:text-gray-600">Home</Link>
        <Link href="/about" className="text-gray-200 hover:text-gray-600">About</Link>
        <Link href="/contact" className="text-gray-200 hover:text-gray-600">Contact</Link>
        <Link href="/services" className="text-gray-200 hover:text-gray-600">Services</Link>
        <Link href="/blog" className="text-gray-200 hover:text-gray-600">Blog</Link>
        <Link href="/products" className="text-gray-200 hover:text-gray-600">products</Link>
      </div>
    </div>
   </div>
  </nav>
  );
}


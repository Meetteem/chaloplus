"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white-600 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-black font-bold text-2xl">Chalo Plus</h1>
                
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="text-white md:hidden"
                >
                    <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
                <div className={`md:flex md:items-center md:space-x-6 ${isOpen ? "block" : "hidden"}`}>
                    <Link href="/">
                        <div className="text-black hover:text-gray-300">Home</div>
                    </Link>
                    <Link href="/aboutus">
                        <div className="text-black hover:text-gray-300">About Us</div>
                    </Link>
                    <Link href="/excel">
                        <div className="text-black hover:text-gray-300">Excel</div>
                    </Link>
                    <Link href="/srchdest">
                        <div className="text-black hover:text-gray-300">Search by Destination</div>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

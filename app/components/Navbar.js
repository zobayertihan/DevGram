"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State to track menu open/close
  const [isDashOpen, setIsDashOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef(null); // Ref to track the menu element

  // Close menu when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${searchQuery}`);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDashboardMenu = () => {
    setIsDashOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="md:hidden">
          <button
            onClick={toggleDashboardMenu}
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:bg-gray-700"
          >
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM2 10a1 1 0 100 2h14a1 1 0 100-2H2zm14 3a1 1 0 11-2 0 1 1 0 012 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center">
          <Link href="/" className="text-white text-xl font-bold">
            DevGram
          </Link>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Link
            href="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            About
          </Link>
          <Link
            href="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Products
          </Link>
          <Link
            href="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            DevFlowAI
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:bg-gray-700"
          >
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM2 10a1 1 0 100 2h14a1 1 0 100-2H2zm14 3a1 1 0 11-2 0 1 1 0 012 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {/* Responsive Menu */}
        {isOpen && (
          <div
            ref={menuRef}
            className="absolute top-16 right-4 bg-gray-800 py-2 px-3 rounded-md shadow-lg"
          >
            <div className="flex justify-end text-white">
              <button onClick={() => setIsOpen(false)}>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.293 5.293a1 1 0 00-1.414 1.414L10 10.414l-2.879-2.88a1 1 0 00-1.414 1.415L8.586 12l-2.88 2.879a1 1 0 001.415 1.414L10 13.414l2.879 2.88a1 1 0 001.414-1.415L11.414 12l2.88-2.879a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div>
              <Link
                href="/"
                className="block text-gray-300 py-1 hover:bg-gray-700 hover:text-white rounded-md"
              >
                About
              </Link>
              <Link
                href="/"
                className="block text-gray-300 py-1 hover:bg-gray-700 hover:text-white rounded-md"
              >
                Products
              </Link>
              <Link
                href="/"
                className="block text-gray-300 py-1 hover:bg-gray-700 hover:text-white rounded-md"
              >
                DevFlowAI
              </Link>
              <Link
                href="/auth/login"
                className="block text-gray-300 py-1 hover:bg-gray-700 hover:text-white rounded-md"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="block text-gray-300 py-1 hover:bg-gray-700 hover:text-white rounded-md"
              >
                Register
              </Link>
            </div>
          </div>
        )}
        {/* End Responsive Menu */}
        {/* Dashboard */}
        {isDashOpen && (
          <div
            ref={menuRef}
            className="absolute top-16 left-4 bg-gray-800 py-2 px-3 rounded-md shadow-lg"
          >
            <div className="flex justify-end text-white">
              <button onClick={() => setIsDashOpen(false)}>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.293 5.293a1 1 0 00-1.414 1.414L10 10.414l-2.879-2.88a1 1 0 00-1.414 1.415L8.586 12l-2.88 2.879a1 1 0 001.415 1.414L10 13.414l2.879 2.88a1 1 0 001.414-1.415L11.414 12l2.88-2.879a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <ul className="pe-5 gap-10">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-blue-500 hover:underline block md:inline-block py-1 md:py-0"
                >
                  Link 1
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-blue-500 hover:underline block md:inline-block py-1 md:py-0"
                >
                  Link 2
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-blue-500 hover:underline block md:inline-block py-1 md:py-0"
                >
                  Link 3
                </a>
              </li>
            </ul>
          </div>
        )}
        <div className="hidden md:flex md:items-center">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="px-3 py-2 pr-10 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button type="submit" className="absolute right-0 top-0 mt-2 mr-2">
              <svg
                className="h-4 w-4 text-gray-500 hover:text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M15 11a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </button>
          </form>
          <Link
            href="/auth/login"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Login
          </Link>
          <Link
            href="/auth/register"
            className="ml-4 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

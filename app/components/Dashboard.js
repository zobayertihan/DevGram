"use client";

import { useState, useEffect, useRef } from "react";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false); // State to track menu open/close
  const menuRef = useRef(null); // Ref to track the menu element

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-gray-200 p-4 w-1/5 min-h-screen md:block hidden text-right relative">
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
    // </div>
  );
}

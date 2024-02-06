"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, Search, X } from "react-feather";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="relative z-10 w-screen">
      <div className="flex h-16 items-center bg-white">
        <div className="flex h-16 w-full items-center justify-between px-2 lg:px-10">
          <div className="flex w-8 justify-center text-black md:mr-32 md:pl-4 lg:hidden">
            <div>
              <Menu onClick={() => setMenuOpen((prev) => !prev)} />
              {menuOpen && (
                <div className="absolute left-0 top-16 block w-32 rounded-sm bg-blue-300 py-4">
                  <ul className="flex min-h-40 flex-col items-center justify-between text-sm text-black">
                    <li>Treatments</li>
                    <li>How it works</li>
                    <li>Delivery</li>
                    <li>FAQ</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="flex h-full w-full items-center lg:w-48">
            <a className="m-auto flex w-32 justify-center md:w-48" href="/">
              <div>
                <Image
                  src="/images/medexpressuk.jpeg"
                  alt="Medexpress Logo"
                  width={400}
                  height={100}
                />
              </div>
            </a>
          </div>
          <ul className="hidden justify-center text-black lg:flex lg:h-full lg:w-1/2">
            <li className="flex h-full cursor-pointer items-center justify-center px-6 hover:bg-blue-300">
              Treatments
            </li>
            <li className="px-6cursor-pointer flex h-full items-center justify-center px-6 hover:bg-blue-300">
              How it works
            </li>
            <li className="flex h-full cursor-pointer items-center justify-center px-6 hover:bg-blue-300">
              Delivery
            </li>
            <li className="flex h-full cursor-pointer items-center justify-center px-6 hover:bg-blue-300">
              FAQ
            </li>
          </ul>
          <div className="flex items-center text-black">
            <div className="h-8 w-8 pr-2 pt-1">
              <Search onClick={() => setSearchOpen((prev) => !prev)} />
            </div>
            <div className="flex w-full">
              <label className="hidden text-sm text-gray-700 md:flex">
                <input
                  placeholder="Search"
                  className="input h-8 w-20 pl-1 md:w-36"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, Search } from "react-feather";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-10 w-full">
      <div className="flex h-16 items-center bg-white">
        <div className="flex h-16 w-full items-center justify-between px-10">
          <div className="text-black lg:hidden">
            <div onClick={() => setMenuOpen((prev) => !prev)}>
              <Menu />
            </div>
          </div>
          <div className="flex h-full">
            <a className="m-auto flex w-48 justify-center" href="/">
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
          <ul className="flex h-full w-1/2 justify-center text-black">
            <li className="flex h-full w-32 cursor-pointer items-center justify-center hover:bg-blue-400">
              Treatments
            </li>
            <li className="flex h-full w-32 cursor-pointer items-center justify-center hover:bg-blue-400">
              How it works
            </li>
            <li className="flex h-full w-32 cursor-pointer items-center justify-center hover:bg-blue-400">
              Delivery
            </li>
            <li className="flex h-full w-32 cursor-pointer items-center justify-center hover:bg-blue-400">
              FAQ
            </li>
          </ul>
          <div className="flex items-center text-black">
            <div className="h-8 pr-2 pt-1">
              <Search />
            </div>
            <div className="flex w-full">
              <label className="text-sm text-gray-700">
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

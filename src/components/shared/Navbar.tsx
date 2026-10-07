import Image from "next/image";
import React from "react";
import logo from "@/assets/book.ico";
import Link from "next/link";
const Navbar = () => {
  const links = (
    <>
      <li className="hover:border-b-3 border-amber-300">
        <Link href="/">Home</Link>
      </li>
      <li className="hover:border-b-3 border-amber-300">
        <Link href="/books">All Books</Link>
      </li>
      <li className="hover:border-b-3 border-amber-300">
        <Link href="/listed-books">Listed Books</Link>
      </li>
      <li className="hover:border-b-3 border-amber-300">
        <Link href="/read-books">Pages to Read</Link>
      </li>
    </>
  );
  return (
    <section className=" w-[85%] mx-auto ">
      <div className="navbar bg-base-100 shadow-sm mt-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <Image src={logo} alt="logo" className=" w-5 sm:w-8  "></Image>
            <h1 className="text-sm sm:text-2xl font-bold">Book Vibe</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          <a className="btn bg-[#23BE0A] text-xs px-2 sm:px-5  ">Sign In</a>
          <a className="btn bg-[#59C6D2] text-xs px-2  sm:px-5">Sign Up</a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

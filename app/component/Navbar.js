'use client'
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-slate-600 bg-opacity-15">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>
                  <CiUser />
                  Login
                </a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href={"/login"}>
                <CiUser />
                Login
              </Link>
            </li>
            <li className="flex justify-center items-center">|</li>
            <li>
              <a>SignUp</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">99+</span>
            <button className="text-4xl"><TiShoppingCart /></button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;

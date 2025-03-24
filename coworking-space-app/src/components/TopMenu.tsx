"use client";

import { useState } from "react";
import TopMenuItem from "./TopMenuItem";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useAuthStore from "@/stores/useAuthStore";

export default function TopMenu() {
  const { isLoggedIn } = useAuthStore(); // ✅ Zustand store
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // เพื่อ auto ปิดเมนูเวลาเปลี่ยนหน้า

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      {/* Navbar (desktop + toggle) */}
      <div className="bg-gradient-to-r from-sky-100 to-white fixed top-0 left-0 right-0 z-50 border-b border-sky-200 shadow-md px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-bold text-sky-700 hover:text-sky-900 transition cursor-pointer tracking-wide">
            <Link href="/">Mk</Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-4 items-center text-base font-semibold text-sky-800">
            <TopMenuItem title="Coworking" pageRef="/coworkingspace" />
            <TopMenuItem title="Reservations" pageRef="/reservations" />
            <TopMenuItem title="My Booking" pageRef="/mybooking" />
            <TopMenuItem title="Contact" pageRef="/contact" />
            <TopMenuItem title="About" pageRef="/about" />
          </div>

          {/* Right - profile icon + toggle menu */}
          <div className="flex items-center gap-3">
            <Link href={isLoggedIn ? "/profile" : "/signin"} title="My Profile">
              <AccountCircleIcon
                fontSize="large"
                className="text-sky-600 hover:text-sky-800 transition cursor-pointer"
              />
            </Link>
            <button className="md:hidden text-sky-700" onClick={toggleMenu}>
              {menuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mt-[64px] px-4 md:hidden fixed top-0 left-0 right-0 z-40">
          <div className="bg-white/90 backdrop-blur-md rounded-lg shadow-md border border-sky-100 
                          py-3 px-4 w-[90%] max-w-xs mx-auto text-sm text-sky-800 font-medium
                          flex flex-col space-y-2">
            <TopMenuItem title="Coworking" pageRef="/coworkingspace" />
            <TopMenuItem title="Reservations" pageRef="/reservations" />
            <TopMenuItem title="My Booking" pageRef="/mybooking" />
            <TopMenuItem title="Contact" pageRef="/contact" />
            <TopMenuItem title="About" pageRef="/about" />
          </div>
        </div>
      )}
    </>
  );
}

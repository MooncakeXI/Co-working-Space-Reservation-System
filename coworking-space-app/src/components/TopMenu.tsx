'use client';

import TopMenuItem from "./TopMenuItem";
import { useSession } from "next-auth/react";
import Link from "next/link";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function TopMenu() {
  const { data: session } = useSession();

  return (
    <div className="h-[64px] bg-gradient-to-r from-sky-100 to-white fixed top-0 left-0 right-0 z-30 border-b border-sky-200 shadow-md px-6 flex items-center justify-between font-sans">

      {/* Left: Logo */}
      <div className="text-3xl font-bold text-sky-700 hover:text-sky-900 transition cursor-pointer tracking-wide">
        <Link href="/">Mk</Link>
      </div>

      {/* Center: Navigation menu */}
      <div className="flex gap-4 items-center text-base font-semibold text-sky-800">
        <TopMenuItem title="Coworking" pageRef="/coworkingspace" />
        <TopMenuItem title="Reservations" pageRef="/reservations" />
        <TopMenuItem title="Booking" pageRef="/booking" />
        <TopMenuItem title="Contact" pageRef="/contact" />
        <TopMenuItem title="About" pageRef="/about" />
      </div>


      {/* Right: Auth Icon */}
      <div>
        {session ? (
          <Link href="/api/auth/signout" title="Sign Out">
            <AccountCircleIcon
              fontSize="large"
              className="text-sky-600 hover:text-sky-800 transition cursor-pointer"
            />
          </Link>
        ) : (
          <Link href="/api/auth/signin" title="Sign In">
            <AccountCircleIcon
              fontSize="large"
              className="text-sky-600 hover:text-sky-800 transition cursor-pointer"
            />
          </Link>
        )}
      </div>
    </div>
  );
}

'use client';

import TopMenuItem from "./TopMenuItem";
import { useSession } from "next-auth/react";
import Link from "next/link";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function TopMenu() {
  const { data: session } = useSession();

  return (
    <div className="h-[60px] bg-white fixed top-0 left-0 right-0 z-30 border-b border-gray-200 shadow-sm px-6 flex items-center justify-between">

      {/* Left: Logo */}
      <div className="text-2xl font-bold text-sky-700 hover:text-sky-900 transition cursor-pointer">
        <Link href="/">Mk</Link>
      </div>

      {/* Center: Navigation menu (compact) */}
      <div className="flex gap-1 items-center text-sm font-medium">
        <TopMenuItem title="Coworking" pageRef="/coworkingspace" />
        <TopMenuItem title="Reservations" pageRef="/reservations" />
        <TopMenuItem title="Booking" pageRef="/booking" />
        <TopMenuItem title="Contact" pageRef="/contact" />
        <TopMenuItem title="About" pageRef="/about" />
      </div>

      {/* Right: Auth Icon */}
      <div>
        {session ? (
          <Link href="/api/auth/signout">
            <AccountCircleIcon
              fontSize="large"
              className="text-cyan-600 hover:text-cyan-800 cursor-pointer"
            />
          </Link>
        ) : (
          <Link href="/api/auth/signin">
            <AccountCircleIcon
              fontSize="large"
              className="text-cyan-600 hover:text-cyan-800 cursor-pointer"
            />
          </Link>
        )}
      </div>
    </div>
  );
}

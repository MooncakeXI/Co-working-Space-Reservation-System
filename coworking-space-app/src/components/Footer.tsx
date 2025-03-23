import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-white text-sm px-6 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* SERVICES */}
        <div>
          <h3 className="text-gray-400 font-semibold mb-2">SERVICES</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/coworkingspace" className="hover:underline text-sky-700">
                Co-Working Space
              </Link>
            </li>
            <li>
              <Link href="/reservations" className="hover:underline text-sky-700">
                Reservation
              </Link>
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-gray-400 font-semibold mb-2">COMPANY</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/about" className="hover:underline text-sky-700">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline text-sky-700">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="text-gray-400 font-semibold mb-2">LEGAL</h3>
          <p className="text-sky-700">
            Copyright © 2025 - All rights reserved by Mk Co.,Ltd
          </p>
        </div>
      </div>
    </footer>
  );
}

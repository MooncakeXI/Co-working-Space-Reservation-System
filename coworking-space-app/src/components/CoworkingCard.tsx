"use client";

import Link from "next/link";
import Image from "next/image";

type Props = {
  id: string;
  name: string;
  address: string;
  openTime: string;
  closeTime: string;
  image?: string; // optional
};

export default function CoworkingCard({
  id,
  name,
  address,
  openTime,
  closeTime,
  image = "/img/cover.jpg", // ✅ fallback รูปภาพ
}: Props) {
  return (
    <Link
      href={`/coworkingspace/${id}`}
      className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
    >
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-sky-800">{name}</h2>
        <p className="text-sm text-gray-500 mb-1">{address}</p>
        <p className="text-sm text-gray-600">
          🕒 Open: {openTime} - {closeTime}
        </p>
      </div>
    </Link>
  );
}

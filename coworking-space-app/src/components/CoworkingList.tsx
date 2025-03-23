"use client";

import { useEffect, useState } from "react";
import CoworkingCard from "./CoworkingCard";
import getCoworkingspaces from "@/libs/getCoworkingspaces";

type Coworking = {
  _id: string;
  name: string;
  address: string;
  telephone_number: string;
  openTime: string;
  closeTime: string;
  image?: string;
};

export default function CoworkingList() {
  const [spaces, setSpaces] = useState<Coworking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCoworkingspaces()
      .then((data) => {
        console.log("Fetched coworking spaces:", data);
        setSpaces(data.data); // ✅ ใช้ .data
      })
      .catch((err) =>
        console.error("Error loading coworking spaces:", err)
      )
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 animate-fade-up">
      {spaces.map((space) => (
        <CoworkingCard
          key={space._id}
          id={space._id}
          name={space.name}
          address={space.address}
          openTime={space.openTime}
          closeTime={space.closeTime}
          image={space.image} // ถ้ามี field image ในอนาคต
        />
      ))}
    </div>
  );
}

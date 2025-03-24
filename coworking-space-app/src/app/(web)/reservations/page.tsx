"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import DateReserve from "@/components/DateReserve";
import useAuthStore from "@/stores/useAuthStore";
import useHydrated from "@/stores/useHydrated";

export default function Reservation() {
  const urlParams = useSearchParams();
  const cid = urlParams.get("id");
  const model = urlParams.get("model");
  const router = useRouter();
  const { isLoggedIn } = useAuthStore();
  const hydrated = useHydrated();

  useEffect(() => {
    if (!hydrated) return;
    
    if (!isLoggedIn) {
      router.push("/signin");
    }
  }, [isLoggedIn]);

  return (
    <main className="min-h-screen pt-[80px] pb-20 px-4 flex flex-col items-center bg-gradient-to-b from-white to-cyan-50">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-sky-700 mb-2">Room Reservation</h1>
        {model && (
          <p className="text-lg text-gray-700">
            Location: <span className="font-semibold text-cyan-700">{model}</span>
          </p>
        )}
      </div>

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl animate-fade-up">
        <DateReserve />
      </div>

      <div className="mt-10 text-center text-gray-400 text-sm">
        {cid && (
          <p>
            Reservation Code: <span className="font-mono">{cid}</span>
          </p>
        )}
      </div>
    </main>
  );
}

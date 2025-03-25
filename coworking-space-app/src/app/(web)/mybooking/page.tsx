'use client';
import MyBookingList from "@/components/MyBookingList";
import { useEffect } from "react";
import useAuthStore from "@/stores/useAuthStore";
import useHydrated from "@/stores/useHydrated";
import { useRouter } from "next/navigation";

export default function BookingPage() {

    const { isLoggedIn } = useAuthStore();
    const hydrated = useHydrated();
    const router = useRouter();

  useEffect(() => {
    if (!hydrated) return;
    if (!isLoggedIn) {
      router.push("/signin");
    }
  }, [hydrated, isLoggedIn]);

  if (!hydrated || !isLoggedIn) return null;

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-cyan-100">
      <main className="pt-[80px] pb-20 px-6 max-w-4xl mx-auto">
        <div className="space-y-6">
          <MyBookingList />
        </div>
      </main>
    </div>
  );
}

'use client';
import MyBookingList from "@/components/MyBookingList";

export default function BookingPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-cyan-100">
      <main className="pt-[80px] pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-sky-700 text-center mb-8 drop-shadow-sm">
          My Bookings
        </h1>
        <div className="space-y-6">
          <MyBookingList />
        </div>
      </main>
    </div>
  );
}

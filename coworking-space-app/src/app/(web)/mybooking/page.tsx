'use client';
import MyBookingList from "@/components/MyBookingList";

export default function BookingPage() {
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

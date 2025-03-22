"use client";

import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";

export default function BookingList() {
    const bookingItems = useAppSelector((state) => state.bookSlice?.bookItems || []);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-sky-800">Your Bookings</h2>

      {bookingItems.length === 0 ? (
        <p className="text-gray-500 text-center">You have no bookings yet.</p>
      ) : (
        <div className="space-y-4">
          {bookingItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow p-4"
            >
              <div className="text-lg font-semibold text-sky-700 mb-1">
                {item.coworkingspace}
              </div>
              <p className="text-sm text-gray-700">Name: {item.nameLastname}</p>
              <p className="text-sm text-gray-700">Phone: {item.tel}</p>
              <p className="text-sm text-gray-700">
                Room Number: {item.room_number}
              </p>
              <p className="text-sm text-gray-700">
                Duration: {item.startTime} - {item.endTime}
              </p>

              <button
                className="mt-3 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 text-sm"
                onClick={() => dispatch(removeBooking(item))}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

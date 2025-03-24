import { create } from "zustand";
import { persist } from "zustand/middleware";

export type BookingItem = {
  nameLastname: string;
  tel: string;
  coworkingspace: string;
  startTime: string;
  endTime: string;
  room_number: number;
};

type BookingState = {
  bookItems: BookingItem[];
  addBooking: (item: BookingItem) => void;
  removeBooking: (item: BookingItem) => void;
};

const useBookingStore = create<BookingState>()(
  persist(
    (set, get) => ({
      bookItems: [],
      addBooking: (item) => {
        const existing = get().bookItems;
        const isDuplicate = existing.some(
          (i) =>
            i.coworkingspace === item.coworkingspace &&
            i.startTime === item.startTime &&
            i.endTime === item.endTime &&
            i.room_number === item.room_number
        );
        if (!isDuplicate) {
          set({ bookItems: [...existing, item] });
        }
      },
      removeBooking: (item) => {
        const filtered = get().bookItems.filter(
          (i) =>
            i.nameLastname !== item.nameLastname ||
            i.tel !== item.tel ||
            i.coworkingspace !== item.coworkingspace ||
            i.startTime !== item.startTime ||
            i.endTime !== item.endTime ||
            i.room_number !== item.room_number
        );
        set({ bookItems: filtered });
      },
    }),
    {
      name: "booking-storage",
    }
  )
);

export default useBookingStore;
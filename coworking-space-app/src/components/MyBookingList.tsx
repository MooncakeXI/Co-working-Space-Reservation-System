"use client";

import { useEffect, useState } from "react";
import getReservations from "@/libs/getReservations";
import { updateReservation } from "@/libs/updateReservation";
import { deleteReservation } from "@/libs/deleteReservation";
import searchReservations from "@/libs/searchReservations";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import useAuthStore from "@/stores/useAuthStore";
import useHydrated from "@/stores/useHydrated";

dayjs.extend(utc);

type Reservation = {
  _id: string;
  coworkingspace: string | { _id: string; name: string };
  user: string | { _id: string };
  nameLastname?: string;
  tel?: string;
  room_number: number;
  startTime: string;
  endTime: string;
};

export default function BookingList() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const { userId, role } = useAuthStore();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newStart, setNewStart] = useState<Dayjs | null>(null);
  const [newEnd, setNewEnd] = useState<Dayjs | null>(null);
  const [searchStart, setSearchStart] = useState<Dayjs | null>(null);
  const [searchEnd, setSearchEnd] = useState<Dayjs | null>(null);
  const hydrated = useHydrated();
  const formatToThaiISOString = (date: Dayjs | null): string => {
    return dayjs(date || undefined).utcOffset(7).format("YYYY-MM-DDTHH:mm:ssZ");
  };
  
  const formatAsLocalString = (date: Dayjs | null): string => {
    return dayjs(date || undefined).format("YYYY-MM-DDTHH:mm:ss");
  };
  
  
  
  useEffect(() => {
    if (!hydrated) return;
    fetchReservations();
  }, [userId, role, hydrated]);

  const fetchReservations = async () => {
    try {
      const data = await getReservations();
      const allReservations = data.data;

      if (Array.isArray(allReservations)) {
        if (role === "admin") {
          setReservations(allReservations);
        } else if (userId) {
          const myBookings = allReservations.filter((r) => {
            const bookingUserId = typeof r.user === "string" ? r.user : r.user?._id;
            return bookingUserId === userId;
          });
          setReservations(myBookings);
        }
      }
    } catch (error) {
      console.error("Failed to load reservations:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchStart || !searchEnd) {
      alert("Please select both start and end time.");
      return;
    }
  
    // ✅ ส่งเวลาแบบ UTC ไปให้ backend
    const formattedStart = formatAsLocalString(searchStart); // ส่งเป็น Local Time → "2025-03-26T15:00:00"
    const formattedEnd = formatAsLocalString(searchEnd);
    
  
    try {
      console.log(formattedStart, formattedEnd);
      setLoading(true);
      const res = await searchReservations(formattedStart, formattedEnd);
  
      if (res.ok) {
        const data = await res.json();
        const filtered = data.data;
  
        if (role === "admin") {
          setReservations(filtered);
        } else if (userId) {
          const myFiltered = filtered.filter((r: any) => {
            const bookingUserId =
              typeof r.user === "string" ? r.user : r.user?._id;
            return bookingUserId === userId;
          });
          setReservations(myFiltered);
        }
      } else {
        const err = await res.json();
        alert(err.message || "Search failed.");
      }
    } catch (err: any) {
      alert(err.message || "Search error");
    } finally {
      setLoading(false);
    }
  };
  
  

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Are you sure you want to delete this booking?");
    if (!confirmDelete) return;

    try {
      await deleteReservation(id);
      setReservations((prev) => prev.filter((r) => r._id !== id));
      alert("Booking deleted successfully!");
    } catch (err: any) {
      console.error("Error deleting booking:", err);
      alert(err.message || "Error deleting booking.");
    }
  };

  const handleEdit = async (id: string) => {
    if (!newStart || !newEnd) {
      alert("Please select start and end time");
      return;
    }
  
    const formattedStart = formatToThaiISOString(newStart);
    const formattedEnd = formatToThaiISOString(newEnd);
  
    try {
      await updateReservation(id, {
        startTime: formattedStart,
        endTime: formattedEnd,
      });
  
      alert("Reservation updated!");
      setEditingId(null);
      setReservations((prev) =>
        prev.map((r) =>
          r._id === id
            ? { ...r, startTime: newStart.toISOString(), endTime: newEnd.toISOString() }
            : r
        )
      );
    } catch (err: any) {
      alert(err.message || "Error updating reservation");
    }
  };
  
  

  return (
      <div className="p-6 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-6 text-center text-sky-700 drop-shadow-sm">
      📘 My Bookings
    </h2>

    {role === "admin" && (
      <p className="text-sm text-green-600 font-medium mb-6 text-center">
        👑 You are viewing all reservations as an admin.
      </p>
    )}

    {/* ตัวค้นหา */}
    <div className="mb-8 bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md border border-sky-100">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <DateTimePicker
            label="Start Time"
            value={searchStart}
            onChange={(val) => setSearchStart(val)}
            slotProps={{ textField: { fullWidth: true } }}
          />
          <DateTimePicker
            label="End Time"
            value={searchEnd}
            onChange={(val) => setSearchEnd(val)}
            slotProps={{ textField: { fullWidth: true } }}
          />
        </div>
      </LocalizationProvider>
      <div className="text-right">
        <button
          onClick={handleSearch}
          className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded shadow transition-all"
        >
          🔍 Search
        </button>
      </div>
    </div>

    {loading ? (
      <p className="text-center text-gray-500">Loading...</p>
    ) : reservations.length === 0 ? (
      <p className="text-center text-gray-400 italic">No bookings found.</p>
    ) : (
      <div className="space-y-6">
        {reservations.map((item) => {
          const bookingUserId = typeof item.user === "string" ? item.user : item.user?._id;
          const canEditOrDelete = role === "admin" || bookingUserId === userId;

          return (
            <div key={item._id} className="bg-white rounded-xl shadow-md border border-sky-100 p-6 transition hover:shadow-lg">
              <div className="text-lg font-semibold text-sky-700 mb-1">
                📍 {typeof item.coworkingspace === "string"
                  ? item.coworkingspace
                  : item.coworkingspace.name}
              </div>

              <div className="text-sm text-gray-700 space-y-1">
                {item.nameLastname && (
                  <p>
                    👤 <span className="font-medium">{item.nameLastname}</span>
                  </p>
                )}
                {item.tel && (
                  <p>
                    📞 <span className="font-medium">{item.tel}</span>
                  </p>
                )}
                <p>🏠 Room: {item.room_number}</p>
                <p>🕒 Start: {dayjs(item.startTime).utc().format("YYYY-MM-DDTHH:mm:ss[Z]")}</p>
                <p>🕒 End: {dayjs(item.endTime).utc().format("YYYY-MM-DDTHH:mm:ss[Z]")}</p>
              </div>

              {canEditOrDelete && editingId === item._id ? (
                <div className="mt-4 bg-sky-50 p-4 rounded-xl shadow-inner space-y-4">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div className="flex flex-col md:flex-row gap-4">
                      <DateTimePicker
                        label="New Start Time"
                        value={newStart}
                        onChange={setNewStart}
                        slotProps={{ textField: { fullWidth: true } }}
                      />
                      <DateTimePicker
                        label="New End Time"
                        value={newEnd}
                        onChange={setNewEnd}
                        slotProps={{ textField: { fullWidth: true } }}
                      />
                    </div>
                  </LocalizationProvider>
                  <div className="flex justify-end gap-2">
                    <button
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                      onClick={() => handleEdit(item._id)}
                    >
                      ✅ Save
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-4 flex gap-3">
                  <button
                    className="px-4 py-1 rounded bg-yellow-500 text-white hover:bg-yellow-600 text-sm"
                    onClick={() => {
                      setEditingId(item._id);
                      setNewStart(dayjs(item.startTime).utc());
                      setNewEnd(dayjs(item.endTime).utc());
                    }}
                    
                  >
                    ✏️ Edit
                  </button>
                  <button
                    className="px-4 py-1 rounded bg-red-500 text-white hover:bg-red-600 text-sm"
                    onClick={() => handleDelete(item._id)}
                  >
                    🗑️ Delete
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    )}
  </div>

  );
}

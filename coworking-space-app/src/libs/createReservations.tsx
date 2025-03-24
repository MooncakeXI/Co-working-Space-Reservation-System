import useAuthStore from "@/stores/useAuthStore";

export const createReservation = async (data: any) => {
  const token = useAuthStore.getState().token; // ✅ ดึง token จาก Zustand

  if (!token) {
    throw new Error("No token found. Please login.");
  }

  const res = await fetch(
    "https://project-backend-co-working-space.vercel.app/api/v1/reservations",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // ✅ ใช้ token จาก Zustand
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "Failed to create reservation");
  }

  return res.json();
};

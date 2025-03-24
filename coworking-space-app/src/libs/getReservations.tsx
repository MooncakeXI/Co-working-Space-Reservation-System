// getReservations.ts
import useAuthStore from "@/stores/useAuthStore";

export default async function getReservations() {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const token = useAuthStore.getState().token; // ✅ ใช้ Zustand store ดึง token

  if (!token) {
    throw new Error("No token available");
  }

  const response = await fetch(
    "https://project-backend-co-working-space.vercel.app/api/v1/reservations",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // ✅ ส่ง token แบบ Bearer
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Reservations");
  }

  return await response.json();
}

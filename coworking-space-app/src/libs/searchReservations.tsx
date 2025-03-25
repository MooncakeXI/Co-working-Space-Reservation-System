import useAuthStore from "@/stores/useAuthStore";

export default async function searchReservations(startTime: string, endTime: string) {
  const token = useAuthStore.getState().token;

  if (!token) throw new Error("Missing token. Please login.");

  const url = new URL("https://project-backend-co-working-space.vercel.app/api/v1/reservations/search");

  // ✅ ใช้ string ตรง ๆ ไม่ต้อง .toISOString()
  url.searchParams.append("startTime", startTime);
  url.searchParams.append("endTime", endTime);

  const res = await fetch(url.toString(), {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
}

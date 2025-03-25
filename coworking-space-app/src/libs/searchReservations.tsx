import useAuthStore from "@/stores/useAuthStore";

export default async function searchReservations(startTime: any, endTime: any) {
  const token = useAuthStore.getState().token;

  if (!token) throw new Error("Missing token. Please login.");

  const url = new URL("https://project-backend-co-working-space.vercel.app/api/v1/reservations/search");
  url.searchParams.append("startTime", startTime.toISOString());
  url.searchParams.append("endTime", endTime.toISOString());

  const res = await fetch(url.toString(), {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
}

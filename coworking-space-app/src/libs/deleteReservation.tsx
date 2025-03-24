import useAuthStore from "@/stores/useAuthStore";

export const deleteReservation = async (id: string) => {
  const token = useAuthStore.getState().token;

  if (!token) {
    throw new Error("No token found. Please login.");
  }

  const res = await fetch(`https://project-backend-co-working-space.vercel.app/api/v1/reservations/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to delete reservation");
  }

  return data;
};

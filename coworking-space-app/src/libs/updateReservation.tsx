import useAuthStore from "@/stores/useAuthStore";

export const updateReservation = async (
    id: string,
    updateData: { startTime: string; endTime: string }
  ) => {
    const token = useAuthStore.getState().token;
  
    if (!token) {
      throw new Error("No token found. Please login.");
    }
  
    const res = await fetch(
      `https://project-backend-co-working-space.vercel.app/api/v1/reservations/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updateData),
      }
    );
  
    const data = await res.json();
  
    if (!res.ok) {
      throw new Error(data.message || "Failed to update reservation");
    }
  
    return data;
  };
  
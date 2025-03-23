export default async function getReservations() {
    await new Promise(resolve => setTimeout(resolve, 300));
  
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  
    const response = await fetch("https://project-backend-co-working-space.vercel.app/api/v1/reservations", {
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }), // ✅ ส่ง token ด้วย
      },
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch Reservations");
    }
  
    return await response.json();
  }
  
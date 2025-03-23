export const createReservation = async (data: any) => {
    const token = localStorage.getItem("token"); // ✅ ดึง token
  
    const res = await fetch("https://project-backend-co-working-space.vercel.app/api/v1/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // ✅ ใส่ token ลงใน header
      },
      body: JSON.stringify(data),
    });
  
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || "Failed to create reservation");
    }
  
    return res.json();
  };
  
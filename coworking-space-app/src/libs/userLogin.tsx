export default async function userLogin(userEmail: string, userPassword: string) {
    const response = await fetch("https://project-backend-co-working-space.vercel.app/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    });
  
    const data = await response.json();
    console.log("LOGIN RESPONSE:", response.status, data); // 👈 เพิ่มตรงนี้
  
    if (!response.ok) {
      throw new Error(data.message || "Failed to log-in");
    }
  
    return data;
  }
  
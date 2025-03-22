export default async function getReservations() {
    await new Promise(resolve => setTimeout(resolve, 300));
    const response = await fetch("https://project-backend-co-working-space.vercel.app/api/v1/reservations");
    if (!response.ok) {
        throw new Error("Failed to fetch Reservations");
    }
    return await response.json();
}
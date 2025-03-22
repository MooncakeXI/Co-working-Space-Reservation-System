export default async function getReservation(id: string) {
    const response = await fetch(`https://project-backend-co-working-space.vercel.app/api/v1/reservations/${id}`); 
    if(!response.ok){
        throw new Error("Failed to fetch Reservation");
    }

    return await response.json();

}
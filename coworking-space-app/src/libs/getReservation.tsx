export default async function getReservation(id: string) {
    const response = await fetch(`http://localhost:5000/api/v1/reservations/${id}`); 
    if(!response.ok){
        throw new Error("Failed to fetch Reservation");
    }

    return await response.json();

}
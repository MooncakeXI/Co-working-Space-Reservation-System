export default async function getCoworkingspace(id: string) {
    const response = await fetch(`https://project-backend-co-working-space.vercel.app/api/v1/coworkingspaces/${id}`); 
    if(!response.ok){
        throw new Error("Failed to fetch Coworking Spaces");
    }

    return await response.json();

}
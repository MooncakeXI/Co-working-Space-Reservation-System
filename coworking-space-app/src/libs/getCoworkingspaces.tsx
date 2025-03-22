export default async function getCoworkingspaces() {
    await new Promise(resolve => setTimeout(resolve, 300));
    const response = await fetch("http://localhost:5000/api/v1/coworkingspaces");
    if (!response.ok) {
        throw new Error("Failed to fetch Coworking Spaces");
    }
    return await response.json();
}
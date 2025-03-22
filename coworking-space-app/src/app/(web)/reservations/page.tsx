'use client'
import { useSearchParams } from "next/navigation";
import DateReserve from "@/components/DateReserve";
export default function Reservation() {
    
    const urlParams = useSearchParams();
    const cid = urlParams.get('id');
    const model = urlParams.get('model');

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">Room Booking</div>
            <div className="text-xl font-medium"> Chain Store: {model} </div>
            <div className="w-fit space-y-2">
                <DateReserve />
            </div>

        </main>
    )
}
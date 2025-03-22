"use client";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
import dayjs, { Dayjs } from "dayjs";

export default function DateReserve() {
    const dispatch = useDispatch<AppDispatch>();

    const [name, setName] = useState<string>("");
    const [tel, setTel] = useState<string>("");
    const [coworkingspace, setCoworkingspace] = useState<string>("");
    const [startTime, setStartTime] = useState<Dayjs | null>(null);
    const [endTime, setEndTime] = useState<Dayjs | null>(null);
    const [roomNumber, setRoomNumber] = useState<number>(0);
    
    const bookVenue = () => {
        if (name && tel && coworkingspace && startTime && endTime && roomNumber) {
            const item = {
                nameLastname: name,
                tel: tel,
                coworkingspace: coworkingspace,
                startTime: dayjs(startTime).format("YYYY/MM/DD"),
                endTime: dayjs(endTime).format("YYYY/MM/DD"),
                room_number: roomNumber,
            };

            console.log("Dispatching item:", item);
            dispatch(addBooking(item));
        } else {
            alert("Please fill in all fields!");
        }
    };

    return (
        <div className="bg-slate-100 rounded-lg p-5 w-fit flex flex-wrap gap-x-5 gap-y-3 justify-center items-baseline">
            <TextField name="Name-Lastname" label="Name-Lastname" variant="standard"
                value={name} onChange={(e) => setName(e.target.value)} />
            <TextField name="Contact-Number" label="Contact-Number" variant="standard"
                value={tel} onChange={(e) => setTel(e.target.value)} />

            <Select variant="standard" name="coworkingspace" id="coworkingspace" className="min-w-[200px]"
                value={coworkingspace} onChange={(e) => setCoworkingspace(e.target.value)}>
                <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                <MenuItem value="Spark">Spark Space</MenuItem>
                <MenuItem value="GrandTable">The Grand Table</MenuItem>
            </Select>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white" value={startTime} onChange={(newDate) => setStartTime(newDate)} />
                <DatePicker className="bg-white" value={endTime} onChange={(newDate) => setEndTime(newDate)} />
            </LocalizationProvider>

            <TextField name="Room-Number" label="Room-Number" variant="standard"
                value={roomNumber} onChange={(e) => setRoomNumber(parseInt(e.target.value))} />

            <div className="flex justify-center w-full mt-4">
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
                    onClick={bookVenue}>
                    Book Venue
                </button>
            </div>
        </div>
    );
}

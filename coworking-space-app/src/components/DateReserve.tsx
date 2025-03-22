"use client";

import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem, TextField, InputLabel, FormControl } from "@mui/material";
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

  const makeReservation = () => {
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
      alert("Your booking has been submitted!");
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-2xl flex flex-wrap gap-6 justify-center">
      <TextField
        fullWidth
        name="Name-Lastname"
        label="Full Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <TextField
        fullWidth
        name="Contact-Number"
        label="Phone Number"
        variant="outlined"
        value={tel}
        onChange={(e) => setTel(e.target.value)}
      />

      <FormControl fullWidth>
        <InputLabel id="coworkingspace-label">Coworking Branch</InputLabel>
        <Select
          labelId="coworkingspace-label"
          value={coworkingspace}
          onChange={(e) => setCoworkingspace(e.target.value)}
          label="Coworking Branch"
        >
          <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
          <MenuItem value="Spark">Spark Space</MenuItem>
          <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </Select>
      </FormControl>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Start Date"
          value={startTime}
          onChange={(newDate) => setStartTime(newDate)}
        />
        <DatePicker
          label="End Date"
          value={endTime}
          onChange={(newDate) => setEndTime(newDate)}
        />
      </LocalizationProvider>

      <TextField
        fullWidth
        name="Room-Number"
        label="Room Number"
        variant="outlined"
        type="number"
        value={roomNumber}
        onChange={(e) => setRoomNumber(parseInt(e.target.value))}
      />

      <div className="w-full flex justify-center">
        <button
          className="bg-sky-600 text-white px-6 py-2 rounded hover:bg-sky-700 transition"
          onClick={makeReservation}
        >
          Book Room
        </button>
      </div>
    </div>
  );
} 

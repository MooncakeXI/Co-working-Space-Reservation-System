import mongoose from  "mongoose";
const ReservationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    coworkingspace: {
        type: mongoose.Schema.ObjectId,
        ref: 'CoWorkingSpace',
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    room_number: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    }
});

const Reservation = mongoose.models.Reservation || mongoose.model("Reservation", ReservationSchema);
export  default Reservation;
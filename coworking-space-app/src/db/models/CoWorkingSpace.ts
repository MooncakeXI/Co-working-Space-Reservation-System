import mongoose from  "mongoose";
const CoWorkingSpaceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    telephone_number: {
        type: String,
        required: [true, 'Please add a telephone number'],
        unique: true,
        match: [
            /^(\+66|66)?(08|09|06)\d{8}$/,
            'Please add a valid telephone number'
        ]
    },
    openTime: {
        type: String,
        required: [true, 'Please add an opening time']
    },
    closeTime: {
        type: String,
        required: [true, 'Please add a closing time']
    }}
    ,{
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
});
  
const CoWorkingSpace = mongoose.models.CoWorkingSpace || mongoose.model("CoWorkingSpace", CoWorkingSpaceSchema);
export  default CoWorkingSpace;
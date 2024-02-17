import mongoose , {Schema}  from "mongoose";
const bookingSchema = new Schema(
    {
        user_booking:String,
        own_dormitory:String,
        dorm_name:String,
        id_room:String,
        price:String,
        booking:String,
        access1:String,
        access2:String,
        notic:String
    },
    {timestamps:true,}
);
const Booked =  mongoose.models.Booked || mongoose.model("Booked",bookingSchema);
export default Booked;
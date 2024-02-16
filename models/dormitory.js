import mongoose , {Schema}  from "mongoose";


const dormitorySchema = new Schema(
    {
        type:String,
        dorm_name:String,
        location:String,
        img:String,
        price:String,
        lat:String,
        long:String,
        time:String,
        detail:String,
        create_by:String,
        booking_list:String
    },
    {timestamps:true,}
);
const Dors =  mongoose.models.Dors || mongoose.model("Dors",dormitorySchema);
export default Dors;
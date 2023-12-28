import mongoose , {Schema}  from "mongoose";


const dormitorySchema = new Schema(
    {
        type:String,
        dorm_name:String,
        location:String,
        img:String,
        price:String,
        detail:String
    },
    {timestamps:true,}
);
const Dors =  mongoose.models.Dors || mongoose.model("Dors",dormitorySchema);
export default Dors;
import mongoose,{Schema} from "mongoose";

const  dormManagmentSchema  = new Schema(
  {
    own_name :String,
    dorm_name:String,
    passportID:String,
    dorm_img: String,
    authentical:String,
    address:String,
    name:String,
    old:String,
    born:String,
    phone_dorm:String,
    floor_amount:String,
    room_amount:String,
    water_unit:String,
    elec_unit:String,
    dorm_address:String,
    booking_status:String,
    id_room_booking:String,
    id_booking:String
  },{timestamps:true,}
);
const DormMNM = mongoose.models.DormMNM || mongoose.model('DormMNM',dormManagmentSchema);
export default DormMNM;

import mongoose,{Schema} from "mongoose";

const  dormManagmentSchema  = new Schema(
  {
    own_name :String,
    dorm_name:String,
    passportID:String,
    dorm_img:Array,
    authentical:String
  },{timestamps:true,}
);
const DormManagement = mongoose.model.DormManagement || mongoose.model('DormManagement',dormManagmentSchema);
export default DormManagement;
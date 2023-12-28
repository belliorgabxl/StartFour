import mongoose , {Schema} from "mongoose";

const userSchema = new Schema(
    {
        username: String ,
        password: String,
        email : String,
        phone: String,
        name: String,
        state: String
    },
    {timestamps:true,}
    );

const User = mongoose.models.User || mongoose.model("User",userSchema);

export default User;
import mongoose , {Schema} from "mongoose";

const postSchema = new Schema(
    {   user_post:String,
        IDpassport:String,
        address:String,
        file_ID:String,
        dorm_name:String,
        price_m:String,
        price_rent:String,
        type:String,
        img:String,
        detail:String,
        location:String,
        ID_room:String,
        floor:String,
        authentic : String
    },
    {timestamps:true,}
    );

const Post = mongoose.models.Post || mongoose.model("Post",postSchema);

export default Post;
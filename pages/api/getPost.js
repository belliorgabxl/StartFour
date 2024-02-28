import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/post";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connectMongoDB();
    const {user_post , IDpassport,address,file_ID,dorm_name,price_m,price_rent,type,
      img,detail,location,ID_room,floor, authentic}= await req.body;
    const post = await Post.create(
      { user_post,
        IDpassport,
        address,
        file_ID,
        dorm_name,
        price_m,
        price_rent,
        type,
        img,
        detail,
        location,
        ID_room,
        floor,
        authentic}
    )
    res.json(post);
  }
  if (req.method === "GET") {
    await connectMongoDB();
    const post = await Post.find();
    return res.json(post);
  }
}

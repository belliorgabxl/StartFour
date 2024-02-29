import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/post";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connectMongoDB();
    const {user_post , IDpassport,address,file_ID,dorm_name,price_m,price_rent,type,
      img,detail,location,ID_room,floor, authentic,post}= await req.body;
    const posts = await Post.create(
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
        authentic,
      Post}
    )
    res.json(posts);
  }
  if (req.method === "GET") {
    await connectMongoDB();
    const posts = await Post.find();
    return res.json(posts);
  }
}

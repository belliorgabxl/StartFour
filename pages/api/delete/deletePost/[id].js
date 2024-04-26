import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/post";

export default async function handler(req, res) {
  const  {id} =  req.query
  if (req.method === "DELETE") {
    await connectMongoDB();
    const post = await Post.findByIdAndDelete(id);
    res.json(post);
}
}
import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/post";

export default async function handler(req,res){
  const {data} = req.query
  if (req.method === "GET") {
    await connectMongoDB();
    const post= await Post.findOne({user_post:data})
    res.json(post);
  }
  if(req.method === "PUT"){
    await connectMongoDB();
    const {
      NewAdress:address,NewIDpassport:IDpassport,Newfile_ID:file_ID,NewAuthentical:authentic
     }= await req.body;
    const post = await Post.findOneAndUpdate({user_post:data},
      {
        address ,file_ID , IDpassport,authentic
       })
    res.json(post);
  }
}
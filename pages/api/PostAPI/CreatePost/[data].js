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
      Newimg:img,
            Newdorm_name:dorm_name,
            Newprice_m:price_m,
            Newprice_rent:price_rent,
            Newtype:type,
            Newdetail:detail,
            Newlocation:location,
            NewID_room:ID_room,
            Newfloor:floor
     }= await req.body;
    const post = await Post.findOneAndUpdate({user_post:data},
      {
       dorm_name,img,price_m,price_rent,type,detail,location,ID_room,floor
       })
    res.json(post);
  }
}
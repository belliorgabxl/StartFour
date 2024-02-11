import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";


export default async function handler(req,res){
  if(req.method === "GET"){
    const  {data} =  req.query
    await connectMongoDB();
    const user = await User.findOne({username:data})
    res.json(user)
  }
}
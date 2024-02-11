import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";


export default async function handler(req,res){
  if (req.method === "PUT") {
    const {data} = req.query
    await connectMongoDB();
    const {Newdormitory:dormitory}= await req.body;
    const dors = await User.findOneAndUpdate({username:data},
      {dormitory})
    res.json(dors);
  }
  if (req.method === "GET") {
    const {data} = req.query
    await connectMongoDB();
    const dormitory = await User.find({username:data})
    res.json(dormitory);
  }

}

import Dors from "@/models/dormitory";
import connectMongoDB from "@/libs/mongodb";


export default async function handler(req,res){
  if (req.method === "GET") {
    const {data} = req.query
    await connectMongoDB();
    const dormitory = await Dors.findOne({_id:data})
    res.json(dormitory);
  }
}
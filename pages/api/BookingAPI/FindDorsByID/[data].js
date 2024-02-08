import connectMongoDB from "@/libs/mongodb"
import Dors from "@/models/dormitory";


export default async function handler(req,res){
  
  if(req.method === "GET"){
    const  {data} =  req.query
    await connectMongoDB();
    const dors = await Dors.findOne({dorm_name:data})
    res.json(dors)
  }
}
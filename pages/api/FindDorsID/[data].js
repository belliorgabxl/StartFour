import connectMongoDB from "@/libs/mongodb";
import Dors from "@/models/dormitory";


export default async function handler(req,res){
  if (req.method === "GET"){
  const { data } = req.query
  await connectMongoDB();
  const dormMNM= await Dors.findOne({_id:data});
  return res.json(dormMNM) 
  }
}
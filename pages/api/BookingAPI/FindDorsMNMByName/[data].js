import connectMongoDB from "@/libs/mongodb";
import DormMNM from "@/models/dormManagement";


export default async function handler(req,res){
  
  if(req.method === "GET"){
    const  {data} =  req.query
    await connectMongoDB();
    const dors = await DormMNM.findOne({own_name:data})
    res.json(dors)
  }
}
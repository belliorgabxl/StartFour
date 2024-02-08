import connectMongoDB from "@/libs/mongodb"
import Booked from "@/models/booking"


export default async function handler(req,res){
  
  if(req.method === "GET"){
    await connectMongoDB();
    const  {data} =  req.query
    const book = await Booked.findOne({id_room:data})
    res.json(book)
  }
}
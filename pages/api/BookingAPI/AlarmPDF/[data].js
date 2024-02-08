import connectMongoDB from "@/libs/mongodb";
import Booked from "@/models/booking";

export default async function handler(req,res){
  const {data} = req.query
  if (req.method === "GET") {
    await connectMongoDB();
    const dormitory = await Booked.findOne({user_booking:data})
    res.json(dormitory);
  }
  if(req.method === "PUT"){
    await connectMongoDB();
    const {
      Newaccess1:access1,
      Newaccess2:access2,
      Newbooking:booking
     }= await req.body;
    const dormitory = await Booked.findOneAndUpdate({user_booking:data},
      {access1,access2,booking })
    res.json(dormitory);
  }
}
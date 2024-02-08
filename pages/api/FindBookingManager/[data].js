import connectMongoDB from "@/libs/mongodb";
import Booked from "@/models/booking";


export default async function handler(req,res){
  if (req.method === "GET"){
  const { data } = req.query
  await connectMongoDB();
  const dorm= await Booked.findOne({id_room:data});
  return res.json(dorm) 
  }
  if (req.method === "PUT") {
    const {data} = req.query
    await connectMongoDB();
    const {
      Newown_dormitory:own_dormitory,
      Newdorm_name:dorm_name , 
      Newid_room:id_room ,
      Newbooking:booking,
      Newprice: price,
      Newaccess1:access1,
      Newaccess2:access2 }= await req.body;
    const dormitory = await Booked.findOneAndUpdate({user_booking:data},
      {own_dormitory,dorm_name , id_room ,price,access1,access2 ,booking})
    res.json(dormitory);
  }
}
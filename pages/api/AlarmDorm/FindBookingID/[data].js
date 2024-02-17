import connectMongoDB from "@/libs/mongodb";
import Booked from "@/models/booking";

export default async function handler(req,res){
  const {data} = req.query
  if (req.method === "GET") {
    await connectMongoDB();
    const dormitory = await Booked.findOne({id_room:data})
    res.json(dormitory);
  }
  if(req.method === "PUT"){
    await connectMongoDB();
    const {Newuser_booking :user_booking,
      Newown_dormitory:own_dormitory,
      Newdorm_name:dorm_name,
      Newid_room:id_room,
      Newprice:price,
      Newaccess1:access1,
      Newaccess2:access2,
      Newbooking:booking,
      Newnotic:notic
     }= await req.body;
    const dormitory = await Booked.findOneAndUpdate({_id:data},
      {user_booking,own_dormitory,dorm_name,
      id_room,price,access1,access2,booking,notic })
    res.json(dormitory);
  }
}
import connectMongoDB from "@/libs/mongodb";
import DormMNM from "@/models/dormManagement";


export default async function handler(req,res){
  if (req.method === "PUT") {
    const {data} = req.query
    await connectMongoDB();
    const {Newid_room:id_room_booking,Newbooking_state:booking_status }= await req.body;
    const dormitory = await DormMNM.findOneAndUpdate({own_name:data},
      {id_room_booking,booking_status})
    res.json(dormitory);
  }
  if (req.method === "GET") {
    const {data} = req.query
    await connectMongoDB();
    const dormitory = await DormMNM.find({own_name:data})
    res.json(dormitory);
  }

}

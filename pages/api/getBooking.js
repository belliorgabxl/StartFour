import connectMongoDB from "@/libs/mongodb";
import Booked from "@/models/booking";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connectMongoDB();
    const { user_booking,own_dormitory,dorm_name, price,id_room,access1,access2,booking,notic}= await req.body;
    const book = await Booked.create(
    { user_booking,own_dormitory,dorm_name, price,id_room,access1,access2,booking,notic}
    )
    res.json(book);
 }
  if (req.method === "GET") {
    await connectMongoDB();
    const booking = await Booked.find();
    return res.json(booking);
  }
}
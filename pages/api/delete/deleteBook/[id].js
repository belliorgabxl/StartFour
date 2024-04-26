import connectMongoDB from "@/libs/mongodb";
import Booked from "@/models/booking";

export default async function handler(req, res) {
  const  {id} =  req.query
  if (req.method === "DELETE") {
    await connectMongoDB();
    const book = await Booked.findByIdAndDelete(id);
    res.json(book);
}
}
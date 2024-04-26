import connectMongoDB from "@/libs/mongodb";
import Dors from "@/models/dormitory";

export default async function handler(req, res) {
  const  {id} =  req.query
  if (req.method === "DELETE") {
    await connectMongoDB();
    const dors = await Dors.findByIdAndDelete(id);
    res.json(dors);
}
}
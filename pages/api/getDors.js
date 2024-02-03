import connectMongoDB from "@/libs/mongodb";
import Dors from "@/models/dormitory";
import clientPromise from "@/libs/mongoPromise";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connectMongoDB();
    const {type,dorm_name,location,img,price,detail,create_by}= await req.body;
    const dormitory = await Dors.create(
      {type,dorm_name,location,img,price,detail,create_by }
    )
    res.json(dormitory);
  }
  if (req.method === "GET") {
    await connectMongoDB();
    const dormitory = await Dors.find();
    return res.json({ dormitory });
  }
}

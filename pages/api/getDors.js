import connectMongoDB from "@/libs/mongodb";
import Dors from "@/models/dormitory";
import clientPromise from "@/libs/mongoPromise";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const client = await  clientPromise;
    const db =  client.db("information");
    const {type,dorm_name,location,img,price,detail }= req.body;
    const dormitory = await db.collection("dors").insertOne(
      {type,dorm_name,location,img,price,detail }
    )
    res.json(dormitory);
  }
  if (req.method === "GET") {
    await connectMongoDB();
    const dormitory = await Dors.find();
    return res.json({ dormitory });
  }
}

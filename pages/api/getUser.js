import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import clientPromise from "@/libs/mongoPromise";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const client = await clientPromise;
    const db = client.db("information");
    const { username, password ,email ,phone,name,state,dormitory}  = req.body;
    const user = await db.collection("users").insertOne({
      username, password ,email ,phone,name,state,dormitory
    })
    res.json(user);
}
  if (req.method === "GET") {
    await connectMongoDB();
    const users = await User.find();
    return res.json({ users });
  }
}

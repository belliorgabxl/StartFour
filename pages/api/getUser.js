import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connectMongoDB();
    const { username, password ,email ,phone,name,state,dormitory}  = req.body;
    const user = await User.create({
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

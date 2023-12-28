import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password ,email ,phone,name,state} = await req.json();
    await connectMongoDB();
    await User.create({ username,password,email,phone,name,state});
    return res.json({message : "Register Success"},{status:201});
  }
  if (req.method === "GET") {
    await connectMongoDB();
    const users = await User.find();
    return res.json({ users });
  }
}

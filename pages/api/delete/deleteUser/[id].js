import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";

export default async function handler(req, res) {
  const  {id} =  req.query
  if (req.method === "DELETE") {
    await connectMongoDB();
    await User.findByIdAndDelete(id);
}
}
import connectMongoDB from "@/libs/mongodb";
import DormMNM from "@/models/dormManagement";

export default async function handler(req, res) {
  const  {id} =  req.query
  if (req.method === "DELETE") {
    await connectMongoDB();
    const dorMNM = await DormMNM.findByIdAndDelete(id);
    res.json(dorMNM);
}
}
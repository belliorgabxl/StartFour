import connectMongoDB from "@/libs/mongodb";
import Dors from "@/models/dormitory";


export default async function handler(req,res){
  if (req.method === "GET"){
   const { data } = req.query
  await connectMongoDB();
  const dormitory = await Dors.find({create_by:data});
  return res.json(dormitory) 
  }
  if (req.method === "PUT") {
    const {data} = req.query
    await connectMongoDB();
    const {Newtype:type,Newdorm_name:dorm_name,Newlocation:location,Newimg:img
      ,Newprice:price,Newdetail:detail }= await req.body;
    const dormitory = await Dors.findByIdAndUpdate(data,
      {type,dorm_name,location,img,price,detail })
    res.json(dormitory);
  }
}
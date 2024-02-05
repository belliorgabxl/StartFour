import connectMongoDB from "@/libs/mongodb";
import DormMNM from "@/models/dormManagement";


export default async function handler(req,res){
  if (req.method === "GET"){
  const { data } = req.query
  await connectMongoDB();
  const dormMNM= await DormMNM.findOne({own_name:data});
  return res.json(dormMNM) 
  }
  if (req.method === "PUT") {
    const {data} = req.query
    await connectMongoDB();
    const {Newname:name,
      NewpassportID:passportID,
      Newold:old,
      Newphone_dorm:phone_dorm
      ,Newborn:born,
      Newaddress:address,
      Newdorm_name:dorm_name,
      Newfloor_amount:floor_amount,
      Newroom_amount:room_amount,
      Newwater_unit:water_unit,
      Newelec_unit:elec_unit,
      Newdorm_address:dorm_address,
      Newauthentical:authentical }= await req.body;
    const dormitory = await DormMNM.findByIdAndUpdate(data,
      {name,
        passportID,
        old,
        phone_dorm,
        born ,
        address,
        dorm_name,
        floor_amount,
        room_amount,
        water_unit,
        elec_unit,
        dorm_address,
        authentical})
    res.json(dormitory);
  }
}
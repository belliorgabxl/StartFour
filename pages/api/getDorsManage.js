import connectMongoDB from "@/libs/mongodb";
import DormMNM from "@/models/dormManagement";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connectMongoDB();
    const {own_name,
      dorm_name,
      passportID,
      dorm_img , 
      authentical,
      name,
      old,
      phone_dorm,
      born, 
      address,
      floor_amount,
      room_amount,
      water_unit
      ,elec_unit,
      dorm_address,
      booking_status,
      id_room_booking  }= await req.body;
    const dorsManage = await DormMNM.create(
      {own_name,
        dorm_name,
        passportID,
        dorm_img , 
        authentical,
        name,
        old,
        phone_dorm,
        born , 
        address,
        floor_amount,
        room_amount,
        water_unit
        ,elec_unit,
        dorm_address,
        booking_status,
        id_room_booking }
    )
    res.json(dorsManage);
  }
  if (req.method === "GET") {
    await connectMongoDB();
    const dorsManage= await DormMNM.find();
    return res.json( dorsManage );
  }
}

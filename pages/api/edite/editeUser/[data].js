import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";


export default async function handler(req,res){
  if (req.method === "PUT") {
    const {data} = req.query
    await connectMongoDB();
    const { UpUsername:username ,
       UpName:name ,
       UpPassword:password
       ,UpPhone :phone
       ,UpEmail:email, 
       UpState:state,
      UpDormitory:dormitory 
    } = await req.body;
    const user = await User.findByIdAndUpdate(data,
      {username,password,email,state,phone,name,dormitory})
    res.json(user);
  }
}
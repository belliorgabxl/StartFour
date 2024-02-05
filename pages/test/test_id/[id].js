import QRcode from "@/components/QRcode"
import { useState , useEffect } from "react";

async function getData(id_){
  const res = await fetch(`http://localhost:3000/api/FindManageDormID/${id_}`, {
    cache: "no-store",
  });
  return res.json();
}

export default function test(){
const name = 'gaaa'
const [information , setInfo] = useState(null);
useEffect(()=>{
  getData(name).then((d)=>{
    setInfo(d);
  })
},[])
  const dorm_name =  information?.dorm_name
  const access =  '1'
  const price = '1,000'
  const id = '1234'
  return(
    <>
    {access=="0"?(
      <div>
        not allow
      </div>
    ):
    access=="1"? (<QRcode params={price} name={name} id={id} dorm_name={dorm_name}/>)
     :
     (
      <div>
        Wrong error
      </div>
     ) 
     }
    </>
  )
}
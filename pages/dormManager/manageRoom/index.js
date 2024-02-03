import {useState,useEffect} from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const getData = async () => {
    const res = await fetch("http://localhost:3000/api/Dors/getDors", {
      cache: "no-store",
    });
    return res.json();
};



export default function manageRoom(){
  const [dors ,  setDors] =useState(null);
  useEffect(()=>{
    getData().then((d)=>{
      setDors(d);
    })
  },[])

  return(
    <div>
        <div>
          <h1> Room manager page</h1>
        </div>
        <div>
            {dors?.dormitory?.map((d)=>
      (<Link href={"/dormManager/manageRoom/room/"+d._id} key={d._id}>
        <h4>{d.dorm_name}</h4>
      </Link>))}
        </div>
    

    </div>
  )
}
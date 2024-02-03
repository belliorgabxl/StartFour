import { useRouter } from "next/router";
import { useState,useEffect } from "react";
const getId = async (id) => {
    const res = await fetch(`http://localhost:3000/api/EditeRoom/${id}`, {
      cache: "no-store",
    });
    return res.json();
};

export default function pageID(){
  const router =  useRouter();
  const id_data = router.query.slug;
  const [data ,  setData] = useState(null);

  const [Newdorm_name, setName] = useState();
  const [Newprice, setPrice] = useState();
  const [Newlocation , setLocat] =  useState();
  const [Newtype,setType] = useState();
  const [Newdetail , setDetail] = useState();
  const [Newimg  ,setImg] = useState();
  
  useEffect(()=>{
    getId(id_data).then((d)=>{
      setData(d);
    })
  },[])
const handleSubmit = async (e) =>{
  e.preventDefault();
  if(!Newdorm_name){
    setName(data?.dorm_name)
  }
  if(!Newtype){
    setType(data?.type)
  }
  if(!Newprice){
    setPrice(data?.price)
  }
  if(!Newlocation){
    setLocat(data?.location)
  }
  if(!Newimg){
    setImg(data?.img)
  }
  if (!Newdetail){
    setDetail(data?.detail)
  }
  try {
    const res = await fetch(`http://localhost:3000/api/EditeRoom/${id_data}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ Newdorm_name,Newtype,Newprice,Newimg,Newlocation,Newdetail }),
    });
    if (!res.ok) {
      alert("error");
      throw new Error("Failed to update topic");
      
    }
    router.push("/");
  } catch (error) {
    alert("don't success"+error)
  }
}
  return(
    <div>
      <div>
        <h1>hello:{data?.dorm_name}</h1>
      </div>
    
      <form onSubmit={handleSubmit} >
        <input type="text"  placeholder="dormitory name"
        onChange={(e)=>setName(e.target.value)}  defaultValue={data?.dorm_name}  />
        <div>
        <input type="text"  placeholder="type"
        onChange={(e)=>setType(e.target.value)} defaultValue={data?.type} />
        </div>
       
       <div>
       <input type="text"  placeholder="price"
        onChange={(e) =>setPrice(e.target.value)} defaultValue={data?.price} />
       </div>

        <div>
        <input type="text" placeholder="location"
        onChange={(e)=> setLocat(e.target.value)} defaultValue={data?.location} />
        </div>
        <div>
        <input type="text"  placeholder="image"
        onChange={(e)=>setImg(e.target.value)} defaultValue={data?.img} />
        </div>
        <div>
        <input type="text"  placeholder="content"
        onChange={(e) =>setDetail(e.target.value)} defaultValue={data?.detail} />
        </div>

        
        <button type="submit">submit</button>
      </form>
 

      
    </div>
  );
}

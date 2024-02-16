import { useRouter } from "next/router";
import { useState,useEffect } from "react";
import styles from "./room.module.css"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    router.push("/dormManager/manageRoom");
  } catch (error) {
    alert("don't success"+error)
  }
}
  return(
    <div className={styles.body}>
      <Navbar/>
      <div className={styles.container}>
        
          <div className={styles.Boxgrid}>

              <div className={styles.Box2}>
                <img className={styles.iconedit} src="/edits.png" width={200} height={200}></img>
              </div>

              <form className={styles.Box1} onSubmit={handleSubmit} >

          

                <div className={styles.Texthead}>
                      <h1>แก้ไข :{data?.dorm_name}</h1>
                </div>

                <div >
                     <input className={styles.Textnameinput} type="text"  placeholder="dormitory name"
                     onChange={(e)=>setName(e.target.value)}  defaultValue={data?.dorm_name}  />
                </div>
          
                <div>
                     <input className={styles.Textnameinput} type="text"  placeholder="type"
                     onChange={(e)=>setType(e.target.value)} defaultValue={data?.type} />
                </div>
       
                <div>
                     <input className={styles.Textnameinput} type="text"  placeholder="price"
                     onChange={(e) =>setPrice(e.target.value)} defaultValue={data?.price} />
                </div>

                <div>
                    <input className={styles.Textnameinput} type="text" placeholder="location"
                    onChange={(e)=> setLocat(e.target.value)} defaultValue={data?.location} />
                </div>

                <div>
                    <input className={styles.Textnameinput} type="text"  placeholder="image"
                    onChange={(e)=>setImg(e.target.value)} defaultValue={data?.img} />
                </div>

                <div>
                    <input className={styles.Textdetailinput} type="text"  placeholder="content"
                    onChange={(e) =>setDetail(e.target.value)} defaultValue={data?.detail} />
                </div>

                

        
                <button className={styles.button} type="submit">submit</button>

                

              </form>
          </div>
        
      </div>
      <Footer/>
    </div>
  );
}

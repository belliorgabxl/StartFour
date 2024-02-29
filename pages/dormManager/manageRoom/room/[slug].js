import { useRouter } from "next/router";
import { useState,useEffect } from "react";
import styles from "./room.module.css"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const getId = async (id) => {
    const res = await fetch(`/api/EditeRoom/${id}`, {
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
  const [Newlat ,setLat] = useState();
  const [Newlong,setLong] = useState();
  const [Newtime,setTime] = useState();
  
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
  if (!Newlat){
    setLat(data?.lat)
  }
  if (!Newlong){
    setLong(data?.long)
  }
  if (!Newtime){
    setTime(data?.time)
  }
  try {
    const res = await fetch(`/api/EditeRoom/${id_data}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ Newdorm_name,Newtype,Newprice,Newimg,Newlocation,Newdetail,Newlat,Newlong,Newtime }),
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
          <div className={styles.Boxleft}>
            <div className={styles.Boxlefticon}>
              <img className={styles.iconedit} src="/edits.png" width={200} height={200}></img>
            </div>
          </div>
          
          <form className={styles.Box1} onSubmit={handleSubmit} >
              <div className={styles.Boxright}>
                <div className={styles.Texthead}>
                      <h1 className={styles.head}> แก้ไข :{data?.dorm_name}</h1>
                </div>

                <div className={styles.line1}>
                     <input className={styles.Textnameinput1} type="text"  placeholder="ประเภทห้อง"
                     onChange={(e)=>setType(e.target.value)} defaultValue={data?.type} />

                     <input className={styles.Textnameinput2} type="text"  placeholder="ชื่อหอพัก"
                     onChange={(e)=>setName(e.target.value)}  defaultValue={data?.dorm_name}  />
                </div >
                <div className={styles.line2}>
                     <input className={styles.Textnameinput4} type="text" placeholder="ที่ตั้ง"
                    onChange={(e)=> setLocat(e.target.value)} defaultValue={data?.location} />
                </div>

                <div className={styles.line3}>
                    <input className={styles.Textnameinput3} type="text"  placeholder="ละติจูด"
                    onChange={(e) =>setLat(e.target.value)} defaultValue={data?.lat} />

                    <input className={styles.Textnameinput2} type="text"  placeholder="ลองจิจูด"
                     onChange={(e) =>setLong(e.target.value)} defaultValue={data?.long} />
                    
                </div>

                <div className={styles.line4}>
                    <input className={styles.Textnameinput3} type="text"  placeholder="ระยะเวลาของสัญญา"
                     onChange={(e) =>setTime(e.target.value)} defaultValue={data?.time} />

                    <input className={styles.Textnameinput2} type="text"  placeholder="ราคาห้องพักต่อเดือน"
                     onChange={(e) =>setPrice(e.target.value)} defaultValue={data?.price} />
                </div>

                <div className={styles.line5}>
                    <input className={styles.Textdetailinput} type="text"  placeholder="รายละเอียดหอพัก"
                    onChange={(e) =>setDetail(e.target.value)} defaultValue={data?.detail} />
                </div>

                <div className={styles.line6}>
                    <input className={styles.Textnameinput5} type="file" name="upload"  placeholder="ภาพห้องพัก"
                    onChange={(e)=>setImg(e.target.value)} defaultValue={data?.img} />
                </div>

                <div className={styles.line7}>
                    <button className={styles.send_btn} type="submit">submit</button>
                </div>

                
              </div>
          </form>
          
        </div>
      </div>
      <Footer/>
    </div>
  );
}

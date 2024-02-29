import styles from "./addroom.module.css";
import Navbar from "@/components/Navbar";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import { supabase } from "@/libs/supabase";

export default function addRoom(){
  const [type , setType] = useState(""); 
  const [dorm_name , setName] = useState("");
  const [location , setLocat] = useState("");
  const [price , setPrice] = useState("");
  const [detail , setDetail] =useState("");
  const [lat , setLat] =useState("");
  const [long , setLong] =useState("");
  const [time , setCont] =useState("");
  

  const getDor = async () => {
    const res = await fetch("/api/getDors", {
      cache: "no-store",
    });
    return res.json();
  };
  const router = useRouter();
  const [create_by , setCreateBy] = useState("");
  const [dors , setDors] = useState(null);
    useEffect(()=>{
      const userList = JSON.parse(localStorage.getItem("userList"))
      if(userList){
          setCreateBy(userList.UserID);
      }else{
        setCreateBy("none");
      }
      getDor().then((d)=>{
        setDors(d)
      })
    },[])
  const img_list = []
  const create_by_list =[]
  let count = 0
  {
  dors?.dormitory?.map((d)=>{
      create_by_list.push(d.create_by)
  })
  for(let i =0;i < create_by_list.length; i++){
    if(create_by == create_by_list[i]){
      count ++
    }
  }
  }
  const handleSubmitt = async (e) => {
    e.preventDefault();
    if(!type || !dorm_name || !location || !price || !detail || !lat || !long || !time || !create_by){
      console.log("Error!");
      alert("empty!!!");
    }
    else{
      const formData = new FormData(e.currentTarget);
      formData.getAll("dorm_img")
      const pathfile =  "/dorm_img:"+create_by+ ":" + count +".png"
      const { data, error } = await supabase.storage.from('dormitoryImage').upload(pathfile,formData);
      let img = "https://kmaderbohtpzmtunqlbx.supabase.co/storage/v1/object/public/dormitoryImage"+pathfile;
              try{
                const res = await fetch("/api/getDors", {
                  method: "POST",
                  headers: {
                    "Content-type": "application/json",
                  },
                  body: JSON.stringify({type,dorm_name,location,img,price,detail,lat,long,time,create_by }),
                });
                if (res.ok) {
                  alert("addPost Success");
                  router.push("/dormManager")
                } else {
                  throw new Error("Failed to create a Data");
                }
              }catch(e){
                console.log(e);
              }  
       }
  }
  return(
    <div className={styles.body}>
      <Navbar/>
      <div className={styles.container}>
        <div className={styles.Boxgrid}>
          <div className={styles.Boxleft}>
            <div className={styles.icon}>
              <img className={styles.icondorm} src="/dorm.png" width={200} height={200}></img>
            </div>
          </div>
          <form onSubmit={handleSubmitt} className={styles.form_box}>
          <div className={styles.Boxright}>
            <div className={styles.texthead}>
              <div className={styles.head}>
                เพิ่มหอพัก
              </div>
            </div>
            <div className={styles.input1}>
              <input className={styles.input_box2} placeholder="ประเภทห้อง" type="text"
              onChange={(e) => setType(e.target.value)} value={type} />

              <input className={styles.input_box3} placeholder="ชื่อหอพัก" type="text"
              onChange={(e) => setName(e.target.value)} value={dorm_name}/> 
            </div>
            <div className={styles.input2}>
              <input className={styles.input_box4} placeholder="ที่ตั้ง" type="text"
              onChange={(e) => setLocat(e.target.value)} value={location}/>
            </div>
            <div className={styles.input3}>
              <input className={styles.input_box5} placeholder="ละติจูด" type="text"
              onChange={(e) => setLat(e.target.value)} value={lat} />

             <input className={styles.input_box6} placeholder="ลองจิจูด" type="text"
             onChange={(e) => setLong(e.target.value)} value={long} />
            </div>
            <div className={styles.input5}>
              <input className={styles.input_box8} placeholder="ระยะเวลาของสัญญา" type="text"
              onChange={(e) => setCont(e.target.value)} value={time} />

              <input className={styles.input_box9} placeholder="ราคาห้องพักต่อเดือน" type="text"
              onChange={(e) => setPrice(e.target.value)} value={price}/>
            </div>
            <div className={styles.input6}>
              <input className={styles.input_detail} placeholder="รายละเอียดหอพัก" type="text"
              onChange={(e) => setDetail(e.target.value)} value={detail}/>
            </div>
            <div className={styles.input4}>
              <div className={styles.Boxinput4}>
                <div className={styles.Gridinputone}>
                  <img className={styles.iconupload} src="/upload.png" alt="upload.png" width={20} height={20}></img>
                </div>
                <div className={styles.Gridinputtwo}>
                  <input className={styles.input_box7} placeholder="ภาพห้องพัก" type="file" name="dorm_img" />
                </div>
              </div>
              <div className={styles.Boxtext}>
                <p className={styles.textupload}>**กรุณาอัปโหลดภาพ**</p>
              </div>
            </div>
            <div className={styles.input7}>
              <button type="submit" className={styles.send_btn}>ยืนยัน</button>
            </div>
          </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
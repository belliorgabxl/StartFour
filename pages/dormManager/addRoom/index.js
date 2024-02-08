import styles from "./addroom.module.css";
import Navbar from "@/components/Navbar";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";

export default function addRoom(){
  const [type , setType] = useState(""); 
  const [dorm_name , setName] = useState("");
  const [location , setLocat] = useState("");
  const [img , setImg] = useState("");
  const [price , setPrice] = useState("");
  const [detail , setDetail] =useState("");
  const [lat , setLat] =useState("");
  const [long , setLong] =useState("");
  const [cont , setCont] =useState("");
  
  const router = useRouter();
  const [create_by , setCreateBy] = useState("");
    useEffect(()=>{
      const userList = JSON.parse(localStorage.getItem("userList"))
      if(userList){
          setCreateBy(userList.UserID);
      }else{
        setCreateBy("none");
      }
    },[])
  const handleSubmitt = async (e) => {
    e.preventDefault();
    if(!type || !dorm_name || !location || !img || !price || !detail || !lat || !long || !cont ){
      console.log("Error!");
      alert("empty!!!");
    }
    else{
              try{
                const res = await fetch("http://localhost:3000/api/getDors", {
                  method: "POST",
                  headers: {
                    "Content-type": "application/json",
                  },
                  body: JSON.stringify({type,dorm_name,location,img,price,detail,lat,long,cont,create_by }),
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
        <div className={styles.Box2}>
          <img className={styles.iconuser} src="/users.png" width={200} height={200}></img>
        </div>

        <div className={styles.Box1}>
           <form onSubmit={handleSubmitt} className={styles.form_box} >
          <div className={styles.titleform}>
            เพิ่มห้องพัก
          </div>


        <input className={styles.input_box2} placeholder="roomtpye" type="text"
        onChange={(e) => setType(e.target.value)} value={type} />

        <input className={styles.input_box3} placeholder="dormitory name" type="text"
        onChange={(e) => setName(e.target.value)} value={dorm_name}/> 

        <input className={styles.input_box4} placeholder="location" type="text"
        onChange={(e) => setLocat(e.target.value)} value={location}/>

        <input className={styles.input_box5} placeholder="lat" type="text"
        onChange={(e) => setLat(e.target.value)} value={lat} />

        <input className={styles.input_box6} placeholder="long" type="text"
        onChange={(e) => setLong(e.target.value)} value={long} />

        <input className={styles.input_box7} placeholder="img URL" type="text"
        onChange={(e) => setImg(e.target.value)} value={img}/>

        <input className={styles.input_box8} placeholder="cont" type="text"
        onChange={(e) => setCont(e.target.value)} value={cont} />

        <input className={styles.input_box9} placeholder="price" type="text"
        onChange={(e) => setPrice(e.target.value)} value={price}/>

        <input className={styles.input_detail} placeholder="detail" type="text"
         onChange={(e) => setDetail(e.target.value)} value={detail}/>

        <button type="submit" className={styles.send_btn}>Send data</button>
        </form>
        </div>
      </div>
    </div>    
  </div>
  )
}
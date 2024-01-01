import styles from "./addroom.module.css";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { useRouter } from "next/router";

export default function addRoom(){
  const [type , setType] = useState(""); 
  const [dorm_name , setName] = useState("");
  const [location , setLocat] = useState("");
  const [img , setImg] = useState("");
  const [price , setPrice] = useState("");
  const [detail , setDetail] =useState("");
  const router = useRouter();
  const handleSubmitt = async (e) => {
    e.preventDefault();
    if(!type || !dorm_name || !location || !img || !price || !detail ){
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
                  body: JSON.stringify({type,dorm_name,location,img,price,detail }),
                });
                if (res.ok) {
                  alert("addPost Success");
                  router.push("/")
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

        <form onSubmit={handleSubmitt} className={styles.form_box} >
          <div className={styles.titleform}>
            Data form
          </div>
        <input className={styles.input_box} placeholder="roomtpye" type="text"
        onChange={(e) => setType(e.target.value)} value={type} />

        <input className={styles.input_box} placeholder="dormitory name" type="text"
        onChange={(e) => setName(e.target.value)} value={dorm_name}/> 

        <input className={styles.input_box} placeholder="location" type="text"
        onChange={(e) => setLocat(e.target.value)} value={location}/>

        <input className={styles.input_box} placeholder="img URL" type="text"
        onChange={(e) => setImg(e.target.value)} value={img}/>

        <input className={styles.input_box} placeholder="price" type="text"
        onChange={(e) => setPrice(e.target.value)} value={price}/>

        <input className={styles.input_detail} placeholder="detail" type="text"
         onChange={(e) => setDetail(e.target.value)} value={detail}/>

        <button type="submit" className={styles.send_btn}>Send data</button>
        </form>
    </div>    
  </div>
  )
}
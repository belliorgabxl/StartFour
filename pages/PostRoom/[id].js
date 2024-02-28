import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { useRouter } from "next/router"
import { useState,useEffect } from "react"
import styles from "./post.module.css"


const getPost = async()=>{
  const res  = await fetch("/api/getPost" , {
    cache:"no-store",
  });
  return res.json();
}
const getUser = async()=>{
  const res = await  fetch("/api/getUser",{
    cache:"no-store"
  })
  return res.json();
}

export default function PostRoom(){
const  [post , setPost] =  useState(null);
const  [user , setUser] = useState(null);
const  router = useRouter();
const user_id =  router.query.id;
useEffect(()=>{
  getPost().then((p)=>{
    setPost(p);
  })
  getUser().then((u)=>{
    setUser(u);
  })
},[])
const username_list = [] ; const phone_list = [] ; const  name_list = [];
let phone_user = '' ; let name_user = ''
{user?.map((u)=>{
  username_list.push(u.username),phone_list.push(u.phone),name_list.push(u.name)
})}
for(let i = 0 ; i < username_list.length ; i++ ){
  if(user_id == username_list[i]){
    name_user = name_list[i];
    phone_user  = phone_list[i];
  }
}
const IDpass_list = []; const address_list = [] ; const file_ID_list = [] ;const dorm_name_list = [];const user_post_list=[];
const price_m_list = [] ; const price_rent_list = []; const type_list  = [] ; const img_list = [] ;
const location_list = [] ; const ID_room_list= [] ; const floor_list = [] ; const authentic_list = [];
let IDpassport =''; let address = '' ;let file_ID =''; let dorm_name = '' ; let user_post = user;
let price_m  = '' ; let price_rent  = '' ; let type= '' ; let img = '' ;
let location ='' ; let ID_room='' ;let  floor='' ; let authentic='a'
{post?.map((d)=>{
    IDpass_list.push(d.IDpassport), address_list.push(d).address,file_ID_list.push(d.file_ID),dorm_name_list.push(d.dorm_name),
    price_m_list.push(d.price_m), price_rent_list.push(d.price_rent) , type_list.push(d.type ), img_list.push(d.img),
    location_list.push(d.location) , ID_room_list.push(d.ID_room) , floor_list.push(d.floor) , authentic_list.push(d.authentic),user_post_list.push(d.user_post)
})}
for(let i = 0 ; i < user_post_list.length ; i++){
    if(user_id == user_post_list[i]){
      IDpassport = IDpass_list[i];address = address_list[i]
      file_ID=  file_ID_list[i];dorm_name= dorm_name_list[i]
      price_m = price_m_list[i] ; price_rent = price_rent_list[i]
      type = type_list [i] ; img = img_list[i]
      location = location_list[i]; ID_room = ID_room_list[i]
      floor = floor_list[i] ; authentic  = authentic_list[i]
    }
}
  return(
    <div className={styles.body}>
      <Navbar/>
      <div className={styles.container}>
        {
          authentic == "none"?(
            <div className={styles.AuthenticBox}>
              <form className={styles.Form} >
                <div className={styles.topic}>
                  ยืนยันตัวตน
                </div>
                
                <div className={styles.FormBox}>
                  <div className={styles.line1}><div></div>
                    <span>
                    <label className={styles.label}>ชื่อ-นามสกุล:</label>
                      <input className={styles.inputLine1} type="text" defaultValue={name_user}/>
                    </span>
                    <span>
                    <label className={styles.label}>บัตรประชาชน:</label>
                      <input className={styles.inputLine1}
                      maxLength={13}  type="text" placeholder="เลขบัตรประชาชน"/>
                    </span>
                  </div>
                  <div className={styles.line2}>
                    <span>
                      <label className={styles.label}>เบอร์ติดต่อ:</label>
                      <input className={styles.inputLine1} type="text" defaultValue={phone_user}/>
                    </span>
                    <span>
                      <input className={styles.file_ID} type="file"/>
                      <div className={styles.tagfile_ID}>***กรุณาแนบหลับฐานสำเนาบัตรประชาชน***</div>
                    </span>
                  </div>
                  <div className={styles.line3}>
                    <div></div>
                    <label className={styles.label}>ที่อยู่:</label>
                    <textarea className={styles.addressArea} rows={3}/>
                  </div>
                  <hr className={styles.line}/>
                  <div className={styles.rule}>
                      <div className={styles.topicRule}>*** ข้อตกลงการใช้งานร่วมกันละหว่างผู้ใช้ ***</div>
                      <div className={styles.contentRule}>
                        1.ยินยอมให้เข้าถึงข้อมูลส่วนตัวของผู้ใช้ที่บันทึกไว้ในระบบเพื่อความจำเป็นต่อการใช้งาน<br/>
                        2.ให้ข้อมูลที่ถูกต้องตรงความเป็นจริง เพื่อความปลอดภัยระหว่างผู้ใช้และการยืนยันตัวตนรวม<br/>&nbsp;&nbsp;
                        ไปถึงป้องกันการทุจริตที่เกิดขึ้นต่อผู้ใช้ร่วมกัน<br/>
                        3.บันทึกข้อมูลชำระเงินของคุณที่เกิดขึ้นในระบบ เพื่อบริการและความต่อเนื่องของการใช้งาน<br/>
                        4.ยินยอมให้จัดเก็บข้อมูลการเข้าสู่ระบบและข้อมูลการติดต่อของคุณสำหรับการเข้าสู่ระบบและ<br/>&nbsp;&nbsp;
                        การสำรองข้อมูลของผู้ใช้เมื่อมีการสูญหายหรือการลบบัญชีผู้ใช้<br/>
                        5.ไม่ร่วมกันหรือโพสขายหลอกลวงเพื่อให้ข้อมูลที่ไม่เป็นความจริงต่อผู็ใช้ให้เกิดความเสียหาย
                      </div>
                  </div>
                    <div className={styles.agree} >
                      <div></div>
                      <span>
                        <input type="radio"  name="status"  value="yes"/>
                        <label className={styles.label}>ยินยอม</label>
                      </span>
                    <span>
                      <input type="radio" name="status" value="no"/>
                      <label className={styles.label}>ไม่ยินยอม</label>
                    </span>
                    <div></div>  
                    </div>
                    <div className={styles.btnArea}>
                      <button className={styles.authenticBtn}>ยืนยัน</button>
                    </div>
                  </div>
              </form>
            </div>
          ):
          authentic == "yes"?(
            <div>
              <h1>ฟอร์มปล่อยห้อง</h1>
            </div>
          ):(
            <div>
              <h1>Loading</h1>
            </div>
          )
        }


      </div>
      <Footer/>
    </div>
  )
}
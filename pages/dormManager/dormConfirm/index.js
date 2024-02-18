import { useState,useEffect } from "react"
import { useRouter } from "next/router"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./dormCorn.module.css"
import Image from "next/image";
import Link from "next/link";
const  getBookingId = async (id)=>{
  const res = await fetch(`http://localhost:3000/api/getBooking`, {
    cache: "no-store",
  });
  return res.json();
}

export default function DormConfirm(){
  const [book ,  setBook] =  useState(null);
  const [user_id,setUserID]= useState();
  const [id_book_database ,setBookID] = useState();
  
  useEffect(()=>{
    const userList = JSON.parse(localStorage.getItem("userList"));
    if (userList) {
      setUserID(userList.UserID);
      setBookID(userList._id)
    } else {
      setUserID("none");
      setBookID(userList._id)
    }
    getBookingId().then((b)=>{
      setBook(b)
    })
  },[])
  return(
    <div className={styles.body}>
      <Navbar/>
      <div className={styles.container}>
        <div className={styles.topic}>
          รายชื่อผู้จอง
        </div>
        {book?.map((b)=>
        b.own_dormitory === user_id &&(
          <Link href={("/dormManager/dormConfirm/confirm/"+b._id)} key={b._id} className={styles.ListBox}>

            <div className={styles.texthead}>
              <Image className={styles.imagechat} src="/chat.png"  width={30} height={30} alt='chat.png'></Image>
              <div className={styles.textname}>รายชื่อผู้จอง</div>
            </div>

            <div>
              <div className={styles.line1}>ผู้จอง: คุณ {b.user_booking} </div>
              <div className={styles.textbooking}>ยืนยันการจองแล้ว</div>
            </div>

            <div className={styles.divider1}></div>

            <div>
              <Image className={styles.imageusers} src="/users.png"  width={100} height={100} alt='users.png'></Image>
              <div className={styles.line2}> {b.dorm_name}</div>
            </div>
            
            <div className={styles.line3}>จองเมื่อ : {b.updatedAt.slice(5,7)}/
            {b.updatedAt.slice(8,10)} {b.updatedAt.slice(11,16)}</div>

            <div className={styles.divider2}></div>
          </Link>
        )
        )}
        <div className={styles.blank}>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
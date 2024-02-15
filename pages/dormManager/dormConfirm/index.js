import { useState,useEffect } from "react"
import { useRouter } from "next/router"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./dormCorn.module.css"
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
            <li className={styles.line1}>ผู้จองชื่อ: {b.user_booking} จองเมื่อ: {b.updatedAt.slice(5,7)}/
            {b.updatedAt.slice(8,10)} {b.updatedAt.slice(11,16)}</li>
            <div className={styles.line2}>หอพักที่จอง: {b.dorm_name}</div>
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
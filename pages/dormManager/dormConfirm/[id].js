import { useState,useEffect } from "react"
import { useRouter } from "next/router"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./confirm.module.css"
const  getBookingId = async (id)=>{
  const res = await fetch(`http://localhost:3000/api/AlarmDorm/FindBookingID/${id}`, {
    cache: "no-store",
  });
  return res.json();
}
const getDorsID  = async (id)=>{
  const res = await fetch(`http://localhost:3000/api/AlarmDorm/FindRoomID/${id}`, {
    cache: "no-store",
  });
  return res.json();
}
export default function Dormconfirm(){
  const router = useRouter();
  const id_room =  router.query.id;
  const [booking,setBooking] = useState(null);
  const [dors,setDors] = useState(null);

  useEffect(()=>{
    getBookingId(id_room).then((d)=>{
      setBooking(d);
    })
    getDorsID(id_room).then((d)=>{
      setDors(d);
    })
  },[])
  const access1 = booking?.access1
  const access2 = booking?.access2

  const Step1Btn = async()=>{
    const Newuser_booking = booking?.user_booking;
    const Newown_dormitory = booking?.own_dormitory;
    const Newdorm_name = booking?.dorm_name;
    const Newid_room = booking?.id_room;
    const Newprice = booking?.price;
    const Newaccess1 =  "allow";
    const Newaccess2 = booking?.access2;
    const res = await fetch(`http://localhost:3000/api/AlarmDorm/FindBookingID/${id_room}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        Newuser_booking,
        Newown_dormitory,
        Newdorm_name,
        Newid_room,
        Newprice,
        Newaccess1,
        Newaccess2
      }),
    });
    router.push("/dormManager")
  }
  const Step2Btn = async()=>{
    const Newuser_booking = booking?.user_booking;
    const Newown_dormitory = booking?.own_dormitory;
    const Newdorm_name = booking?.dorm_name;
    const Newid_room = booking?.id_room;
    const Newprice = booking?.price;
    const Newaccess1 =  booking?.access1;
    const Newaccess2 = "allow";
    const res = await fetch(`http://localhost:3000/api/AlarmDorm/FindBookingID/${id_room}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        Newuser_booking,
        Newown_dormitory,
        Newdorm_name,
        Newid_room,
        Newprice,
        Newaccess1,
        Newaccess2
      }),
    });
    router.push("/dormManager")
  }
  const Step3Btn = async()=>{
    const Newuser_booking = booking?.user_booking;
    const Newown_dormitory = booking?.own_dormitory;
    const Newdorm_name = booking?.dorm_name;
    let Newid_room = booking?.id_room;
    const Newprice = booking?.price;
    const Newaccess1 =  "success";
    const Newaccess2 = "success";
    const res = await fetch(`http://localhost:3000/api/AlarmDorm/FindBookingID/${id_room}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        Newuser_booking,
        Newown_dormitory,
        Newdorm_name,
        Newid_room,
        Newprice,
        Newaccess1,
        Newaccess2
      }),
    });
    Newid_room="none";
    let Newbooking_state="none";
    const response = await fetch(`http://localhost:3000/api/AlarmDorm/AlarmManager/${Newown_dormitory}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({Newid_room,Newbooking_state }),
    });
    router.push("/dormManager")
  }

  return(
    <>
      {access1=="none"?(
    <div className={styles.body}>
      <Navbar/>
      <div className={styles.container}>
      <div className={styles.topic}>
          Noticfication
        </div>
        <div className={styles.alarm1}>
        จองมาจาก คุณ : {booking?.user_booking}<br/>
        สถานะ : รอการยืนยันจากคุณ        <hr/>
        ตัวหอพักของคุณที่จองคือ<br/>
        หอพัก {dors?.dorm_name}<br/>
        ราคา : {dors?.price}<br/>
        จองเมื่อ : {booking?.updatedAt}<br/>
        </div>
        <div className={styles.btnArea}>
        <button onClick={Step1Btn} className={styles.ConfirmBtn}>อนุมัติให้ชำระ</button>
        </div>

      </div>
      <Footer/>
    </div>)
    : access1=="allow"&& access2=="none"?
    (
      <div className={styles.body}>
      <Navbar/>
      <div className={styles.container}>
        <div className={styles.topic}>
          Noticfication
        </div>
        <div className={styles.alarm}>
          รอผู้เช่าทำการชำระค่ามัดจำการจอง...
        </div>
      </div>
      <Footer/>
    </div>
    ): access1=="customerPayment"&&access2=="none"?(
      <div className={styles.body}>
      <Navbar/>
      <div className={styles.container}>
      <div className={styles.topic}>
          Noticfication
        </div>
        <div className={styles.alarm}>
        ผู้ขอเช่าได้ทำการชำระเงินสำเร็จแล้ว กรุณาเช็คสลิป..
        </div>
        <div className={styles.btnArea}>
        <button onClick={Step2Btn} className={styles.ConfirmBtn}>
           อนุมัติการทำสัญญา
        </button>
        </div>
      </div>
      <Footer/>
    </div>
    ): access1=="customerPayment"&&access2=="allow"?
    (
      <div className={styles.body}>
      <Navbar/>
      <div className={styles.container}>
        <div className={styles.topic}>
          Noticfication
        </div>
        <div className={styles.alarm}>
          รอผู้เช่าทำการกรอกสัญญา...
        </div>
      </div>
      <Footer/>
    </div>
    ):
    access1=="customerPayment"&&access2=="GenPDF"?
    (
      <div className={styles.body}>
      <Navbar/>
      <div className={styles.container}>
      <div className={styles.topic}>
          Noticfication
        </div>
        <div className={styles.alarm}>
        ผู้ขอเช่าได้ทำสัญญาสำเร็จแล้ว<br/>โปรดตรวจสอบรายละเอียดสัญญาก่อนดำเนินการ <hr/>        
        </div>
        <div className={styles.btnArea}>
          <button onClick={Step3Btn} className={styles.ConfirmBtn}>อนุมัติการเช่า</button>
        </div>

      </div>
      <Footer/>
    </div>
      // <
      // </div>
    )
    :(
      <div>
        <h1> Loading...</h1>
      </div>
    )}
    </>
  )
}
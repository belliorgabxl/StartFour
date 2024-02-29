import { useState,useEffect } from "react"
import { useRouter } from "next/router"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./confirm.module.css"
import Image from "next/image";
import Link from "next/link";
const  getBookingId = async (id)=>{
  const res = await fetch(`/api/getBooking`, {
    cache: "no-store",
  });
  return res.json();
}
const getDorsID  = async (id)=>{
  const res = await fetch(`/api/getDors`, {
    cache: "no-store",
  });
  return res.json();
}
export default function Dormconfirm(){
  const router = useRouter();
  const id_booking_local=  router.query.id;
  const [book,setBooking] = useState(null);
  const [dors,setDors] = useState(null);
  const [user_id,setUserID] = useState();
  useEffect(()=>{
    const userList = JSON.parse(localStorage.getItem("userList"));
    if (userList) {
      setUserID(userList.UserID);
    } else {
      setUserID("none");
    }
    getBookingId().then((d)=>{
      setBooking(d);
    })
    getDorsID().then((r)=>{
      setDors(r);
    })
  },[])
  const user_booking_list = [];
  const own_dormitory_list = [];
  const dorm_name_list = [];
  const id_room_list = [];
  const price_list = [];
  const booking_list = [];
  const access1_list = [];
  const access2_list = [];
  const updatelist = []
  let updateAt=''
  let user_booking = "";
  let own_dormitory = "";
  let dorm_name = "";
  let id_room = "";
  let price = "";
  let booking = "";
  let access1 = "";
  let access2 = "";
  let id_booking_database = ''
  const id_book_database_list = []
  {
    book?.map((b) => {
      user_booking_list.push(b.user_booking),
        own_dormitory_list.push(b.own_dormitory),
        dorm_name_list.push(b.dorm_name),
        id_room_list.push(b.id_room),
        price_list.push(b.price),
        booking_list.push(b.booking),
        access1_list.push(b.access1),
        access2_list.push(b.access2)
        ,updatelist.push(b.updatedAt),
        id_book_database_list.push(b._id)
    });
  }
  for (let i = 0; i < user_booking_list.length; i++) {
    if (id_book_database_list[i] == id_booking_local) {
      own_dormitory = own_dormitory_list[i];
      id_booking_database = id_book_database_list[i]
      dorm_name = dorm_name_list[i];
      id_room = id_room_list[i];
      price = price_list[i];
      booking = booking_list[i];
      access1 = access1_list[i]
      access2 = access2_list[i]
      user_booking = user_booking_list[i]
      updateAt = updatelist[i]
    }
  }
  
  const pathPDF = "https://kmaderbohtpzmtunqlbx.supabase.co/storage/v1/object/public/PDF/GenPDF:"+user_booking+".pdf"
  const pathfile = "https://kmaderbohtpzmtunqlbx.supabase.co/storage/v1/object/public/attachments/slip:"+user_booking+".png"
  const Step1Btn = async()=>{
    const Newuser_booking = user_booking;
    const Newown_dormitory = own_dormitory;
    const Newdorm_name = dorm_name;
    const Newid_room  = id_room;
    const Newprice = price;
    const Newaccess1 =  "allow";
    const Newaccess2 = access2;
    const Newnotic = "on"
    const res = await fetch(`/api/AlarmDorm/FindBookingID/${id_booking_local}`, {
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
        Newaccess2,
        Newnotic
      }),
    });
    router.push("/dormManager")
  }
  const Step2Btn = async()=>{
    const Newuser_booking = user_booking;
    const Newown_dormitory = own_dormitory;
    const Newdorm_name = dorm_name;
    const Newid_room = id_room;
    const Newprice = price;
    const Newaccess1 =  access1;
    const Newaccess2 = "allow";
    const Newnotic = "on"
    const res = await fetch(`/api/AlarmDorm/FindBookingID/${id_booking_local}`, {
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
        Newaccess2,
        Newnotic
      }),
    });
    router.push("/dormManager")
  }
  const Step3Btn = async()=>{
    const Newuser_booking = user_booking;
    const Newown_dormitory = own_dormitory+":success";
    const Newdorm_name = dorm_name;
    let Newid_room = id_room;
    const Newprice = price;
    const Newaccess1 =  "success";
    const Newaccess2 = "success";
    const res = await fetch(`/api/AlarmDorm/FindBookingID/${id_booking_local}`, {
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
    const response = await fetch(`/api/AlarmDorm/AlarmManager/${Newown_dormitory}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({Newid_room,Newbooking_state }),
    });
    router.push("/dormManager")
  }
function check(){
  router.push(pathPDF)
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
        <hr className={styles.line}/>
        <div className={styles.BoxContent}>
        <div className={styles.alarm1}>

          <div className={styles.texthead}>
            อนุมัติให้ชำระเงิน
          </div>
          <div className={styles.text}>
            <div className={styles.tagRed}>สถานะ : รอการยืนยันจากคุณ  </div> 
            <div className={styles.textname}>
              ผู้จอง : {user_booking}
            </div>  
            <div className={styles.inContent}>
              <div className={styles.imgUser}>
              <Image  src="/dorm.png"
              width={150} height={150} alt='users.png'></Image>
              </div>
              <div className={styles.inContent_info}>
                หอพัก : {dorm_name}<br/>
                ราคา : {price}<br/>
                จองเมื่อ : {updateAt}<br/>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.btnArea}>
            <button onClick={Step1Btn} className={styles.ConfirmBtn}>อนุมัติให้ชำระ</button>
          </div>
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
        <hr className={styles.line}/>
        <div className={styles.BoxContent}>
          <div className={styles.alarm}>
          "โปรดรอผู้เช่าทำการชำระค่ามัดจำการจอง"
        </div>
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
        <div className={styles.BoxContent}>
            <div className={styles.alarm}>
             ผู้ขอเช่าได้ทำการชำระเงินสำเร็จแล้ว กรุณาเช็คหลักฐาน
            </div>
          <div className={styles.slipBox}>
              <div className={styles.slipPayment}>
                <img src={pathfile} width={450} height={530} alt="slip"/> 
              </div>
          </div>
          <div className={styles.btnArea}>
          <button onClick={Step2Btn} className={styles.ConfirmBtn}>
            อนุมัติการทำสัญญา
          </button>
          </div>
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
        <div className={styles.BoxContent}>
          <div className={styles.alarm}>
            รอผู้เช่าทำการกรอกสัญญา...
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    ): access1=="customerPayment"&&access2=="GenPDF"?
    (
      <div className={styles.body}>
      <Navbar/>
      <div className={styles.container}>
        <div className={styles.topic}>
          Noticfication
        </div>
        <div className={styles.BoxContent}>
          <div className={styles.alarm}>
             ผู้ขอเช่าได้ทำสัญญาสำเร็จแล้ว รอผู้เช่าทำการส่งหลักฐาน       
          </div>
        </div>
        
      </div>
      <Footer/>
    </div>
    ): access1=="wait"&&access2=="approve"?
    (
      <div className={styles.body}>
      <Navbar/>
      <div className={styles.container}>
      <div className={styles.topic}>
          Noticfication
        </div>
        <div className={styles.BoxContent}>
          <div className={styles.alarm2}>
          ผู้ขอเช่าได้ทำสัญญาสำเร็จแล้ว<br/>โปรดตรวจสอบรายละเอียดสัญญาก่อนดำเนินการ

          </div>
          <button onClick={check} className={styles.checkBtn}>ดูสัญญาออนไลน์</button>
          <hr className={styles.line}/>
          <div className={styles.btnArea}>
            <button onClick={Step3Btn} className={styles.ConfirmBtn}>อนุมัติการเช่า</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    )
    :(
      <div>
        <h1> Loading...</h1>
        {id_booking_local}
      </div>
    )}
    </>
  )
}
import { useState,useEffect } from "react"
import { useRouter } from "next/router"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./confirm.module.css"
import Image from "next/image";
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
  for (let i = 1; i < user_booking_list.length; i++) {
    if (id_book_database_list[i] == id_booking_local) {
      own_dormitory = own_dormitory_list[i];
      id_booking_database = id_book_database_list[i]
      dorm_name = dorm_name_list[i];
      id_room = id_room_list[i];
      price = price_list[i];
      booking = booking_list[i];
      access1 = access1_list[i];
      access2 = access2_list[i];
      user_booking = user_booking_list[i]
      updateAt = updatelist[i]
    }
  }
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

          <div className={styles.texthead}>
            อนุมัติให้ชำระเงิน
          </div>
          <div className={styles.text}>
            <div className={styles.textname}>จองมาจาก : คุณ {user_booking}</div>
            <div className={styles.textconfirm}>รอการยืนยันจากคุณ  </div>      
            <div className={styles.divider1}></div>
            <div className={styles.textdorm}>{dorm_name}</div>
            <div className={styles.textprice}>ราคา : {price}</div>
            <div className={styles.texttime}>จองเมื่อ : {updateAt}</div>
            <div className={styles.divider2}></div>
            <Image className={styles.imageusers} src="/dorm.png"  width={150} height={150} alt='users.png'></Image>
            
          </div>

          <div className={styles.btnArea}>
            <button onClick={Step1Btn} className={styles.ConfirmBtn_one}>อนุมัติให้ชำระ</button>
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
        <button onClick={Step2Btn} className={styles.ConfirmBtn_two}>
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
          <button onClick={Step3Btn} className={styles.ConfirmBtn_three}>อนุมัติการเช่า</button>
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
        {id_booking_local}
      </div>
    )}
    </>
  )
}
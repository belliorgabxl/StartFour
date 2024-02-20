import styles from "./qrcode.module.css";
import { useEffect, useState } from 'react';
import Image from "next/image";
import { useRouter } from 'next/router'; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

async function getBook() {
  const res = await fetch(
    `/api/getBooking`,
    { cache: "no-store" }
  );
  return res.json();
};
const getDors = async () => {
  const res = await fetch(
    `/api/getDorsManage`,
    { cache: "no-store" }
  );
  return res.json();
};

export default function payment(){
  const router = useRouter(); 
  const id_room_byID = router.query.id
  const [book, setBook] = useState(null);
  const [dorm,setDorm] = useState(null);
  const [user_id , setUserID] = useState();
  const [id_booking_local , setIDbook] = useState();

useEffect(()=>{
  const userList = JSON.parse(localStorage.getItem("userList"));
    if (userList) {
      setUserID(userList.UserID);
      setIDbook(userList._id);
    } else {
      setUserID("none");
      setIDbook("none")
    }
  getBook().then((d)=>{
    setBook(d);
  })
  getDors().then((r)=>{
    setDorm(r)
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
const id_book_database_list= []
const [id_book_database,setIDBOOKdb] = useState()
const [user_booking, setUserbook] = useState()
const [dorm_name , setDormName] =useState()
const [id_room , setIDroom] = useState()
const [booking , setBooking] = useState()
const [access1 , setA1] = useState()
const [access2 , setA2] = useState()
const [ price , setPrice] = useState("");
const [own_dormitory , setOwn] =useState('')
useEffect(()=>{
  book?.map((b) => {
    user_booking_list.push(b.user_booking),
      own_dormitory_list.push(b.own_dormitory),
      dorm_name_list.push(b.dorm_name),
      id_room_list.push(b.id_room),
      price_list.push(b.price),
      booking_list.push(b.booking),
      access1_list.push(b.access1),
      access2_list.push(b.access2),
      id_book_database_list.push(b._id)
  });
for (let i = 1; i < user_booking_list.length; i++) {
  if (id_book_database_list[i] == id_booking_local ) {
    setIDBOOKdb(id_book_database_list[i])
    setOwn(own_dormitory_list[i])
    setDormName(dorm_name_list[i])
    setIDroom(id_room_list[i])
    setPrice(price_list[i])
    setBooking(booking_list[i])
    setA1(access1_list[i])
    setA2(access2_list[i])
    setUserbook(user_booking_list[i]) 
  }
}
},[book])

let mobileNumber = "0957437740"   // เปลี่ยนเป็นเบอร์เจ้าของหอตรงนี้ได้
const [qrCodeData, setQRCodeData] = useState('');

useEffect(()=>{
  let amount  = price.replace(",",'');  // 4300
    fetch('/api/QRcode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount: Number(amount), mobileNumber: mobileNumber }),
  })
    .then(response => response.json())
    .then(data => {
      setQRCodeData(data.Result);
    })
},[price])

async function sendPayment(){
  const Newuser_booking = user_booking;
  const Newown_dormitory = own_dormitory;
  const Newdorm_name = dorm_name;
  let Newid_room = id_room;
  const Newprice = price;
  const Newaccess1 =  "customerPayment";  // 4,500
  const Newaccess2 = access2;
  let Newnotic = "off"
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
  router.push("/Booking/"+user_id)
}
  return(
    <div className={styles.body}>
      <Navbar/>

    <div className={styles.container}>   
     <div className={styles.topic}>QR Code Promptpay</div>
        {qrCodeData? (
          <div className={styles.QRarea}>
          <div className={styles.con}>
                          <img src="/payment.png" alt="QR Code" style={{ width: '250px', objectFit: 'contain' }} />
            <div className={styles.qrCode}>
              <img src={qrCodeData} alt="QR Code" style={{ width: '250px', objectFit: 'contain' }} />
            </div>
            <div className={styles.infoContainer}>
              ชื่อบัญชี : {own_dormitory}
              <div>รหัสพร้อมเพย์ : {mobileNumber}</div>
              <div>จำนวนเงิน : {price} บาท</div>
            </div>
          </div>
          <div className={styles.btnArea}>
            <button onClick={sendPayment} className={styles.payBtn}>ยืนยันการชำระ</button>
          </div>
              <Footer/>
          </div>
        ):
        (
          <div>
          </div>
        )}
      </div>
    </div>
  )
}





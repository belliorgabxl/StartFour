import styles from "./qrcode.module.css";
import { useEffect, useState } from 'react';
import Image from "next/image";
import { useRouter } from 'next/router'; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Upload from "@/components/Slip";

async function getBook() {
  const res = await fetch(
    `http://localhost:3000/api/getBooking`,
    { cache: "no-store" }
  );
  return res.json();
};
const getDors = async () => {
  const res = await fetch(
    `http://localhost:3000/api/getDorsManage`,
    { cache: "no-store" }
  );
  return res.json();
};

export default function payment(){
  const router = useRouter(); 
  const id_room_byID = router.query.id
  const [book, setBook] = useState(null);
  const [dorm,setDorm] = useState(null);

useEffect(()=>{
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
let user_booking = "";
let own_dormitory = "";
let dorm_name = "";
let id_room = "";
let price = "";
let booking = "";
let access1 = "";
let access2 = "";
{
  book?.map((b) => {
    user_booking_list.push(b.user_booking),
      own_dormitory_list.push(b.own_dormitory),
      dorm_name_list.push(b.dorm_name),
      id_room_list.push(b.id_room),
      price_list.push(b.price),
      booking_list.push(b.booking),
      access1_list.push(b.access1),
      access2_list.push(b.access2);
  });
}
for (let i = 1; i < user_booking_list.length; i++) {
  if (id_room_list[i] == id_room_byID ) {
    own_dormitory = own_dormitory_list[i];
    dorm_name = dorm_name_list[i];
    id_room = id_room_list[i];
    price = price_list[i];
    booking = booking_list[i];
    access1 = access1_list[i];
    access2 = access2_list[i];
    user_booking = user_booking_list[i]
  }
}
let amount1  = price.replace(",", "");
let amount = amount1
let mobileNumber = "0957437740"   // เปลี่ยนเป็นเบอร์เจ้าของหอตรงนี้ได้
let name = own_dormitory
const [qrCodeData, setQRCodeData] = useState('');

const dorm_owner_list = []
useEffect(()=>{
    fetch('/api/QRcode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount: parseFloat(parseInt(amount)), mobileNumber: mobileNumber }),
  })
    .then(response => response.json())
    .then(data => {
      setQRCodeData(data.Result);
    })
},[])

async function sendPayment(){
  const Newuser_booking = user_booking;
  const Newown_dormitory = own_dormitory;
  const Newdorm_name = dorm_name;
  let Newid_room = id_room;
  const Newprice = price;
  const Newaccess1 =  "customerPayment";
  const Newaccess2 = access2;
  let imageUrl = "";

  const fileInput = document.querySelector('input[type="file"]');
  if (fileInput?.files?.length > 0) {
      const receiptImage = fileInput.files[0];

      const formData = new FormData();
      formData.append("receiptImage", receiptImage);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();
        imageUrl = responseData.imageUrl;
      }
    } else {
      console.error("No file selected");
    }

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
      Newaccess2,
      imageUrl
    }),
  });
  router.push("/Booking/"+user_booking)
}
  return(
    <div className={styles.body}>
      <Navbar/>

    <div className={styles.container}>   
     <div className={styles.topic}>QR Code Promptpay</div>
      <div className={styles.detail}>เปิดแอพพลิเคชั่นธนาคาร สแกน QR Code ด้านล่าง พร้อมกับแนบหลักฐานการชำระเงิน</div>
        {qrCodeData? (
          <div className={styles.QRarea}>
        <div className={styles.con}>
              <div className={styles.title}>
                <Image src="/payment.png" width={280} height={110} alt="img" />
              </div>
              <div className={styles.qrCode}>
                <img src={qrCodeData} alt="QR Code" style={{ width: '280px', objectFit: 'contain' }} />
              </div>
            <div className={styles.infoContainer}>
              ชื่อบัญชี : {name}
              <div>รหัสพร้อมเพย์ : {mobileNumber}</div>
              <div>จำนวนเงิน : {amount} บาท</div>
            </div>
          </div>
          <Upload onFileChange={(file) => console.log("Received file:", file)} />
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





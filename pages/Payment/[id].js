import styles from "./qrcode.module.css";
import { useEffect, useState } from 'react';
import Image from "next/image";
import { useRouter } from 'next/router'; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

async function getBook(id) {
  const res = await fetch(
    `http://localhost:3000/api/BookingAPI/FindBookByIDroom/${id}`,
    { cache: "no-store" }
  );
  return res.json();
};
const getDors = async (id) => {
  const res = await fetch(
    `http://localhost:3000/api/BookingAPI/FindDorsMNMByName/${id}`,
    { cache: "no-store" }
  );
  return res.json();
};

export default function payment(){
  const router = useRouter(); 
  const id_room = router.query.id
  const [book, setBook] = useState(null);
  const [amount, setAmount] = useState('');
  const [mobileNumber, setMobileNumber] = useState('0957437740');
  const [name, setName] = useState('');
  const [qrCodeData, setQRCodeData] = useState('');
  const [dorm,setDorm] = useState(null);
useEffect(()=>{
  getBook(id_room).then((d)=>{
    setBook(d);
    setAmount(d.price)
    getDors(d.own_dormitory).then((r)=>{
      setDorm(r)
      setName(r.name)
    })
  })
},[])

useEffect(()=>{
    fetch('/api/QRcode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount: parseFloat(amount), mobileNumber: mobileNumber }),
  })
    .then(response => response.json())
    .then(data => {
      setQRCodeData(data.Result);
    })
},[])

async function sendPayment(){
  const Newuser_booking = book?.user_booking;
  const Newown_dormitory = book?.own_dormitory;
  const Newdorm_name = book?.dorm_name;
  let Newid_room = book?.id_room;
  const Newprice = book?.price;
  const Newaccess1 =  "customerPayment";
  const Newaccess2 = book?.access2;
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
  router.push("/Booking/"+book?.user_booking)
}
  return(
    <div className={styles.body}>
      <Navbar/>

    <div className={styles.container}>   

     <div className={styles.topic}>QR Code Promptpay</div>
        {qrCodeData? (
          <div className={styles.QRarea}>
          <div className={styles.con}>
            <div className={styles.qrCode}>
              <img src={qrCodeData} alt="QR Code" style={{ width: '250px', objectFit: 'contain' }} />
            </div>
            <div className={styles.infoContainer}>
              ชื่อบัญชี : {name}
              <div>รหัสพร้อมเพย์ : {mobileNumber}</div>
              <div>จำนวนเงิน : {amount} บาท</div>
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





import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "./book.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const getBook = async (id) => {
  const res = await fetch(
    `http://localhost:3000/api/BookingAPI/FindBookByName/${id}`,
    { cache: "no-store" }
  );
  return res.json();
};
const getDors = async (id) => {
  const res = await fetch(
    `http://localhost:3000/api/BookingAPI/FindDorsByID/${id}`,
    { cache: "no-store" }
  );
  return res.json();
};

export default function booking() {
  const router = useRouter();
  const user = router.query.id;
  const [book, setBook] = useState(null);
  const [dors, setDors] = useState(null);

  useEffect(() => {
    getBook(user).then((d) => {
      setBook(d);
      getDors(d.dorm_name).then((r) => {
        setDors(r);
      });
    });
  }, []);

  function step1() {
    router.push("/Payment/" + book?.id_room);
  }
  function step2() {
    router.push("/GenPDF");
  }
  const bookState = book?.booking
  return (
    <div>
      { bookState == "none" ? (
        <div className={styles.body}>
          <Navbar/>
          <div className={styles.container}>
          <div className={styles.topicBook}>
              Booking
            </div>
            <div className={styles.alarm}>
             คุณยังไม่ได้ทำการจองหอพักใดๆ..
            </div>
          </div>
          <Footer/>
        </div>
      ) :book?.access1 == "none" && book?.access2=="none"?
      (
        <div className={styles.body}>
          <Navbar/>
          <div className={styles.container}>
          <div className={styles.topicBook}>
              Booking
            </div>
            <div className={styles.alarm}>
              รอผู้ปล่อยเช่าอนุมัติขั้นตอนการจอง...
            </div>
            <div className={styles.roomBox}>
              <div className={styles.imgBox}>
                <img src={dors?.img} width={400} height={300} alt="img"></img>
              </div>
              <div className={styles.textBox}>
                <div className={styles.textBox1}>
                  <div className={styles.dormNameBox}>{dors?.dorm_name}</div>

                  <div className={styles.locationBox}>, {dors?.location}</div>
                </div>
                <div className={styles.priceBox}>
                  <div className={styles.price}>{dors?.price}</div>
                  <div className={styles.month}>/month</div>
                </div>
                <div className={styles.detailBox}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dors?.detail}
                </div>

                <div className={styles.typeBox}>Roomtype: {dors?.type}</div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      ):book?.access1 == "allow" && book?.access2=="none" ? (
        <div className={styles.body}>
          <Navbar />
          <div className={styles.container}>
            <div className={styles.topicBook}>
              Booking
            </div>
            <div className={styles.descript}>
              <span>ชื่อผู้ใช้: {user}</span>
              <span>สถานะ: ได้ทำการจอง</span>
            </div>
            <div className={styles.roomBox}>
              <div className={styles.imgBox}>
                <img src={dors?.img} width={400} height={300} alt="img"></img>
              </div>
              <div className={styles.textBox}>
                <div className={styles.textBox1}>
                  <div className={styles.dormNameBox}>{dors?.dorm_name}</div>

                  <div className={styles.locationBox}>, {dors?.location}</div>
                </div>
                <div className={styles.priceBox}>
                  <div className={styles.price}>{dors?.price}</div>
                  <div className={styles.month}>/month</div>
                </div>
                <div className={styles.detailBox}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dors?.detail}
                </div>

                <div className={styles.typeBox}>Roomtype: {dors?.type}</div>
              </div>
            </div>

            <div className={styles.btnArea}>
              <button onClick={step1} className={styles.ConfirmBtn}>
                ชำระการจอง
              </button>
            </div>
          </div>
          <Footer />
        </div>
      ) :
      book?.access1 == "customerPayment" && book?.access2=="none"?
      (
        <div className={styles.body}>
          <Navbar/>
          <div className={styles.container}>
          <div className={styles.topicBook}>
              Booking
            </div>
            <div className={styles.alarm}>
              รอผู้ปล่อยเช่าตรวจสอบใบเสร็จแล้วอนุมัติการทำสัญญา..
            </div>
          </div>
          <Footer/>
        </div>
      ):
      book?.access1 == "customerPayment" && book?.access2=="allow"?
      (
        <div className={styles.body}>
          <Navbar/>
          <div className={styles.container}>
          <div className={styles.topicBook}>
              Booking
            </div>
            <div className={styles.alarm}>
              "ผู้เช่าอนุมัติการทำสัญญาแล้ว"
            </div>
              <div className={styles.btnArea}>
              <button onClick={step2} className={styles.ConfirmBtn}>
                เริ่มทำสัญญา
              </button>
            </div>
          </div>
          <Footer/>
        </div>
      ): (
        <div className={styles.body}>
          <Navbar/>
          <div className={styles.container}>
          <div className={styles.topicBook}>
              Booking
            </div>
            <div className={styles.alarm}>
              Loading...
            </div>
          </div>
          <Footer/>
        </div>
      )}
    </div>
  );
}

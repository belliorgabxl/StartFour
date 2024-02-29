import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "./book.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/libs/supabase";

const getBook = async () => {
  const res = await fetch(`/api/getBooking`, {
    cache: "no-store",
  });
  return res.json();
};
const getDors = async (id) => {
  const res = await fetch(`/api/getDors`, {
    cache: "no-store",
  });
  return res.json();
};
export default function booking() {
  const router = useRouter();
  const user = router.query.id;
  const [book, setBook] = useState(null);
  const [dors, setDors] = useState(null);
  const [localDors, setLocalDors] = useState();

  useEffect(() => {
    const userList = JSON.parse(localStorage.getItem("userList"));
    if (userList) {
      setLocalDors(userList.Dormitory);
    } else {
      setLocalDors("none");
    }
    getBook().then((b) => {
      setBook(b);
    });
    getDors().then((d) => {
      setDors(d);
    });
  }, []);
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
  for (let i = 0; i < user_booking_list.length; i++) {
    if (user_booking_list[i] == user) {
      own_dormitory = own_dormitory_list[i];
      dorm_name = dorm_name_list[i];
      id_room = id_room_list[i];
      price = price_list[i];
      booking = booking_list[i];
      access1 = access1_list[i];
      access2 = access2_list[i];
    }
  }
  const type_list = [];
  const location_list = [];
  const img_list = [];
  const detail_list = [];
  let type = "";
  let location = "";
  let img = "";
  let detail = "";
  const dorm_name_owner_list = [];
  {
    dors?.dormitory?.map((d) => {
      type_list.push(d.type),
        location_list.push(d.location),
        img_list.push(d.img),
        detail_list.push(d.detail),
        dorm_name_owner_list.push(d.dorm_name);
    });
  }
  for (let i = 0; i < dorm_name_owner_list.length; i++) {
    if (dorm_name_owner_list[i] == dorm_name) {
      type = type_list[i];
      location = location_list[i];
      img = img_list[i];
      detail = detail_list[i];
    }
  }
  function step1() {
    router.push("/Payment/" + id_room);
  }
  function step2() {
    router.push("/GenPDF");
  }
  async function step3(event){
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.getAll("genPDF")
    const pathfile =  "/GenPDF:"+user+".pdf"
    const { data, error } = await supabase.storage.from('PDF').upload(pathfile,formData);
    const Newaccess1 =  "wait";
    const Newaccess2 = "approve";
    const Newbooking = 'no'
    let Newnotic = "off"
    const res = await fetch(`/api/BookingAPI/AlarmPDF/${user}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      Newbooking,
      Newaccess1,
      Newaccess2,
      Newnotic
    }),
  });
    router.push('/');
  }
  const bookState = booking;
  return (
    <div>
      {bookState == "none" ? (
        <div className={styles.body}>
          <Navbar />
          <div className={styles.container}>
            <div className={styles.topicBook}>Booking</div>
            <div className={styles.alarm}>คุณยังไม่ได้ทำการจองหอพักใดๆ..</div>
          </div>
          <Footer />
        </div>
      ) : access1 == "none" && access2 == "none" ? (
        <div className={styles.body}>
          <Navbar />
          <div className={styles.container}>
            <div className={styles.topicBook}>Booking</div>
            <div className={styles.alarm}>
              รอผู้ปล่อยเช่าอนุมัติขั้นตอนการจอง...
            </div>
            <div className={styles.roomBox}>
              <div className={styles.imgBox}>
                <img src={img} width={400} height={300} alt="img"></img>
              </div>
              <div className={styles.textBox}>
                <div className={styles.textBox1}>
                  <div className={styles.dormNameBox}>{dorm_name}</div>

                  <div className={styles.locationBox}>, {location}</div>
                </div>
                <div className={styles.priceBox}>
                  <div className={styles.price}>{price}</div>
                  <div className={styles.month}>/month</div>
                </div>
                <div className={styles.detailBox}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{detail}
                </div>

                <div className={styles.typeBox}>Roomtype: {type}</div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ) : access1 == "allow" && access2 == "none" ? (
        <div className={styles.body}>
          <Navbar />
          <div className={styles.container}>
            <div className={styles.topicBook}>Booking</div>
            <div className={styles.descript}>
              <span>ชื่อผู้ใช้: {user}</span>
              <span>สถานะ: ได้ทำการจอง</span>
            </div>
            <div className={styles.roomBox}>
              <div className={styles.imgBox}>
                <img src={img} width={400} height={300} alt="img"></img>
              </div>
              <div className={styles.textBox}>
                <div className={styles.textBox1}>
                  <div className={styles.dormNameBox}>{dorm_name}</div>

                  <div className={styles.locationBox}>, {location}</div>
                </div>
                <div className={styles.priceBox}>
                  <div className={styles.price}>{price}</div>
                  <div className={styles.month}>/month</div>
                </div>
                <div className={styles.detailBox}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{detail}
                </div>

                <div className={styles.typeBox}>Roomtype: {type}</div>
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
      ) : access1 == "customerPayment" && access2 == "none" ? (
        <div className={styles.body}>
          <Navbar />
          <div className={styles.container}>
            <div className={styles.topicBook}>Booking</div>
            <div className={styles.alarm}>
              รอผู้ปล่อยเช่าตรวจสอบใบเสร็จแล้วอนุมัติการทำสัญญา..
            </div>
          </div>
          <Footer />
        </div>
      ) : access1 == "customerPayment" && access2 == "allow" ? (
        <div className={styles.body}>
          <Navbar />
          <div className={styles.container}>
            <div className={styles.topicBook}>Booking</div>
            <div className={styles.alarm}>"ผู้เช่าอนุมัติการทำสัญญาแล้ว"</div>
            <div className={styles.btnArea}>
              <button onClick={step2} className={styles.ConfirmBtn}>
                เริ่มทำสัญญา
              </button>
            </div>
          </div>
          <Footer />
        </div>
      ): access1 == "customerPayment" && access2 == "GenPDF" ? (
        <div className={styles.body}>
          <Navbar />
          <div className={styles.container}>
            <div className={styles.topicBook}>Booking</div>
            <div className={styles.alarm}>ทำการส่งสัญญาให้ผู้ดูแลตรวจสอบ</div>
            <form onSubmit={step3}>
              <input type="file" name="genPDF" className={styles.inputFile}/>
               <div className={styles.btnArea}>
              <button  className={styles.ConfirmBtn}>
                ส่ง
              </button>
            </div>
            </form>
          </div>
          <Footer />
        </div>
      ): access1 == "wait" && access2 == "GenPDF" ? (
        <div className={styles.body}>
          <Navbar />
          <div className={styles.container}>
            <div className={styles.topicBook}>Booking</div>
            <div className={styles.alarm}>รอผู้ดูแลตรวจสอบ</div>
          </div>
          <Footer />
        </div>
      ): access1 == "success" && access2 == "success" ? (
        <div className={styles.body}>
          <Navbar />
          <div className={styles.container}>
            <div className={styles.topicBook}>Booking</div>
            <div className={styles.alarm}>ท่านอยู่ระหว่างการเช่าหอพัก {dorm_name}</div>
          </div>
          <Footer />
        </div>
      ) : (
        <div className={styles.body}>
          <Navbar />
          <div className={styles.container}>
            <div className={styles.topicBook}>
              Booking
              </div>
            <div className={styles.alarm}>
              Loading...
              
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

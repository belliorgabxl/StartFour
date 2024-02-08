import styles from "./room.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import Space from "@/components/SpaceTab";

const getData = async (iddata) => {
  const res = await fetch(`http://localhost:3000/api/FindDorsID/${iddata}`, {
    cache: "no-store",
  }); 
  return res.json();
};

export default function Roomdata() {
  const router = useRouter();
  const id = router.query.data;
  const [dors, setDors] = useState(null);
  const [user_id, setUserID] = useState("");
  const [user_state, setState] = useState("");
  const [user_type, setType] = useState("");
  useEffect(() => {
    getData(id).then((d) => {
      setDors(d);
    });
    const userList = JSON.parse(localStorage.getItem("userList"));
    if (userList) {
      setUserID(userList.UserID);
      setState(userList.State);
      setType(userList.Type);
    } else {
      setUserID("none");
      setState("none");
      setType("none");
    }
  }, []);
  const img_list=[]
  const dorm_name = dors?.dorm_name;
  const locat_name = dors?.location;
  let img_id = dors?.img;
  let price_name = dors?.price;
  let detail_name = dors?.detail;
  let type_name = dors?.type;
  let dorm_id =   dors?._id

  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % img_list.length);
  };
  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + img_list.length) % img_list.length
    );
  };

  async function BookingBtn() {
    let Newown_dormitory = dors?.create_by
    let Newdorm_name = dorm_name
    let Newid_room = dorm_id
    let Newprice = dors?.price 
    let Newaccess1 = "none" 
    let Newaccess2 = "none"
    let Newbooking_state = 'alarm'
    let Newbooking = "yes"
    const res2 = await fetch(`http://localhost:3000/api/FindBookingManager/${user_id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({Newown_dormitory,Newdorm_name , Newid_room 
        ,Newprice,Newaccess1 ,Newaccess2 ,Newbooking }),
    });
    
    const res3 = await fetch(`http://localhost:3000/api/AlarmDorm/AlarmManager/${Newown_dormitory}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({Newid_room,Newbooking_state }),
    });
    router.push("/");
  }

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.imageColumn}>
          <div className={styles.textname}>{dorm_name}</div>
          <div className={styles.textlo}>
            <Image src="/map.png" alt="Image 1" width={20} height={20} />
            {locat_name}
          </div>
          <div className={styles.imageWrapper}>
            <div
              className={styles.imageContainer}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <img className={styles.image} src={img_id} alt={dorm_name} />
              {img_list.map((img_id, index) => (
                <img
                  key={index}
                  className={styles.image}
                  src={img_id}
                  alt={dorm_name}
                />
              ))}
            </div>
            <button className={styles.btt} onClick={nextSlide}>
              <img src="/next.png" width={35} height={35} alt="Previous" />
            </button>
            <button className={styles.btt} onClick={prevSlide}>
              <img src="/past.png" width={35} height={35} alt="Previous" />
            </button>
          </div>
        </div>
        <div className={styles.detailsColumn}>
          <div className={styles.details}>
            <div className={styles.textbar}>
              <div>
                <Image src="/file.png" alt="Image 1" width={30} height={30} />
              </div>
              <div className={styles.textbar1}>
                <div>Contract</div>
                <div>Long-term contract 1 year</div>
              </div>
            </div>
            <div className={styles.textbar}>
              <div>
                <Image
                  src="/price-tag.png"
                  alt="Image 1"
                  width={30}
                  height={30}
                />
              </div>
              <div className={styles.textbar1}>
                <div> Price</div>
                <div>{price_name}/month</div>
              </div>
            </div>
            <div className={styles.textbar}>
              <div>
                <Image src="/bed.png" alt="Image 1" width={30} height={30} />
              </div>
              <div className={styles.textbar1}>
                <div>Room type</div>
                <div>{type_name}</div>
              </div>
            </div>
            <div className={styles.textbar1}>
              <button onClick={BookingBtn} className={styles.button}>
                Booking
              </button>
            </div>
          </div>
          <div className={styles.dorm}>
            <div className={styles.imageColumn}>
              <div className={styles.textdorm1}>รายละเอียดของหอพัก</div>
              <div className={styles.textdorm}>{detail_name}</div>
            </div>
            <div className={styles.detailsColumn1}>
              <div className={styles.price}>
                <div className={styles.textprice}>
                  <div>รายเดือน :</div>
                  <div>เงินประกัน :</div>
                  <div>ค่าไฟ :</div>
                  <div>ค่าน้ำ :</div>
                  <div>ค่าส่วนกลาง :</div>
                  <div>อินเทอร์เน็ต :</div>
                  <div>ที่จอดรถ :</div>
                </div>
                <div className={styles.textprice}>
                  <div>{price_name}/month</div>
                  <div>8,000</div>
                  <div>8/unit</div>
                  <div>18/unit</div>
                  <div>300/month</div>
                  <div>FREE</div>
                  <div>FREE </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Space />
      <Footer />
    </div>
  );
}

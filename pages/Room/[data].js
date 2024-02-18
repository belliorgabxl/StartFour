import styles from "./room.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import Space from "@/components/SpaceTab";

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/getDors`, {
    cache: "no-store",
  }); 
  return res.json();
};

export default function Roomdata() {
  const router = useRouter();
  const id = router.query.data;
  const [dors, setDors] = useState(null);
  const [user_id, setUserID] = useState("");
  const [id_booking_local , setIDBOOK] = useState();
  useEffect(() => {
    const userList = JSON.parse(localStorage.getItem("userList"));
    if (userList) {
      setUserID(userList.UserID);
      setIDBOOK(userList._id)
    } else {
      setUserID("none");
      setIDBOOK("none");
    }
    getData().then((d) => {
      setDors(d);
    });
  },[]);
  const dorm_name_list = []
  const img_list = []
  const locat_list =[]
  const create_by_list = []
  const price_list = []
  const detail_list =[]
  const type_list =[]
  const id_list = []

  const image_list=[]
  let dorm_name = ""
  let locat_name = ""
  let img = ""
  let price = ""
  let detail = ""
  let type = ""
  let dorm_id =   ""
  let create_by=''
  {dors?.dormitory?.map((d)=>{
    id_list.push(d._id),
    dorm_name_list.push(d.dorm_name),
    image_list.push(d.img),
    create_by_list.push(d.create_by),
    locat_list.push(d.location),
    price_list.push(d.price),
    detail_list.push(d.detail),
    type_list.push(d.type)
  })}
  for(let i = 1;i<id_list.length ; i++ ){
    if(id_list[i] == id){
      dorm_name = dorm_name_list[i]
      locat_name = locat_list[i]
      img = image_list[i]
      price = price_list[i]
      detail = detail_list[i]
      type  = type_list[i]
      dorm_id = id_list[i]
      create_by = create_by_list[i]
    }
  }



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
    let Newown_dormitory = create_by
    let Newdorm_name = dorm_name
    let Newid_room = dorm_id
    let Newprice = price
    let Newaccess1 = "none" 
    let Newaccess2 = "none"
    let Newbooking_state = 'alarm'
    let Newbooking = "yes"
    const res2 = await fetch(`http://localhost:3000/api/FindBookingManager/${user_id}`, {
      method: "PUT",headers: {"Content-type": "application/json",},
      body: JSON.stringify({Newown_dormitory,Newdorm_name , Newid_room 
        ,Newprice,Newaccess1 ,Newaccess2 ,Newbooking }),});
    const res3 = await fetch(`http://localhost:3000/api/AlarmDorm/AlarmManager/${Newown_dormitory}`, {
      method: "PUT",headers: {"Content-type": "application/json",},body: JSON.stringify({Newid_room,Newbooking_state }),
    });
    let Newdormitory = Newdorm_name
    const res4 = await fetch(`http://localhost:3000/api/AlarmDorm/AlarmUser/${user_id}`, {method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({Newdormitory}),
    });
    var getID = {UserID:user_id,State:"login",Type:"customer",_id :id_booking_local,Dormitory:Newdorm_name}
    localStorage.setItem("userList",JSON.stringify(getID));
    router.push("/Homepage");
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
              <img className={styles.image} src={img} alt={dorm_name} />
              {img_list.map((img, index) => (
                <img
                  key={index}
                  className={styles.image}
                  src={img}
                  alt={dorm}
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
                <div>{price}/month</div>
              </div>
            </div>
            <div className={styles.textbar}>
              <div>
                <Image src="/bed.png" alt="Image 1" width={30} height={30} />
              </div>
              <div className={styles.textbar1}>
                <div>Room type</div>
                <div>{type}</div>
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
              <div className={styles.textdorm}>{detail}</div>
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
                  <div>{price}/month</div>
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

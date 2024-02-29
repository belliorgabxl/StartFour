import styles from "./room.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import Space from "@/components/SpaceTab";

const getPost = async () => {
  const res = await fetch(`/api/getPost`, {
    cache: "no-store",
  }); 
  return res.json();
};

export default function Roomdata() {
  const router = useRouter();
  const id = router.query.data;
  const [post, setPost] = useState(null);
  const [user_id, setUserID] = useState("");
  useEffect(() => {
    const userList = JSON.parse(localStorage.getItem("userList"));
    if (userList) {
      setUserID(userList.UserID);
    } else {
      setUserID("none");
      setIDBOOK("none");
    }
    getPost().then((d) => {
      setPost(d);
    });
  },[]);
  const IDpass_list = [];
  const address_list = [];
  const file_ID_list = [];
  const dorm_name_list = [];
  const user_post_list = [];
  const price_m_list = [];
  const price_rent_list = [];
  const type_list = [];
  const img_list = [];
  const location_list = [];
  const ID_room_list = [];
  const floor_list = [];
  const authentic_list = [];
  const post_list=[]
  const detail_list=[]
  const id_list=[]
  let postes=''
  let IDpassport = "";
  let address = "";
  let file_ID = "";
  let dorm_name = "";
  let price_m = "";
  let price_rent = "";
  let type = "";
  let img = "";
  let location = "";
  let ID_room = "";
  let floor = "";
  let authentic = "a";
  let detail =''
  {
    post?.map((d) => {
      IDpass_list.push(d.IDpassport),
        address_list.push(d).address,
        file_ID_list.push(d.file_ID),
        dorm_name_list.push(d.dorm_name),
        price_m_list.push(d.price_m),
        price_rent_list.push(d.price_rent),
        type_list.push(d.type),
        img_list.push(d.img),
        location_list.push(d.location),
        ID_room_list.push(d.ID_room),
        floor_list.push(d.floor),
        authentic_list.push(d.authentic),
        user_post_list.push(d.user_post),
        post_list.push(d.post),
        detail_list.push(d.detail)
    });
  }
  for (let i = 0; i < user_post_list.length; i++) {
    if (id == id_list[i]) {
      IDpassport = IDpass_list[i];
      address = address_list[i];
      file_ID = file_ID_list[i];
      dorm_name = dorm_name_list[i];
      price_m = price_m_list[i];
      price_rent = price_rent_list[i];
      type = type_list[i];
      img = img_list[i];
      location = location_list[i];
      ID_room = ID_room_list[i];
      floor = floor_list[i];
      authentic = authentic_list[i];
      postes = post_list[i]
      detail = detail_list[i]
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
  async function BuyBtn() {
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
            {location}
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
                <div>{price_m}/month</div>
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
              <button onClick={BuyBtn} className={styles.button}>
               ซื้อ
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
                  <div>{price_m}/month</div>
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

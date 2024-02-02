import styles from "./room.module.css"
import { useRouter } from "next/router";
import { useState,useEffect } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import Space from "@/components/SpaceTab";



const getData = async()=>{
    const res = await fetch("http://localhost:3000/api/Dors/getDors", {
      cache: "no-store",
    });
    return res.json();
}


export default function Roomdata(){
  const [dors, setDors] = useState(null);
  useEffect(() => {
    getData().then((d) => {
      setDors(d);
    });
  }, []);
    const router = useRouter()
const id = router.query.data
const name_list =[]
const id_list=[]
const locat_list=[]
const img_list=[]
const price_list=[]
const detail_list=[]
const type_list=[]

let dorm_name = "none"
let locat_name = "none"
let img_id = "none"
let price_name = "none"
let detail_name = "none"
let type_name = "none"

    {dors?.dormitory?.map((d)=>{
        id_list.push(d._id),
        name_list.push(d.dorm_name),
        locat_list.push(d.location),
        img_list.push(d.img),
        price_list.push(d.price),
        detail_list.push(d.detail),
        type_list.push(d.type)
    })}
    for(let i =0 ; i<id_list.length;i++){
        if(id_list[i] == id ){
            dorm_name = name_list[i]
            locat_name = locat_list[i]
            img_id = img_list[i] 
            price_name = price_list[i]
            detail_name = detail_list[i]
            type_name=type_list[i]

        }
    };


    const [currentSlide, setCurrentSlide] = useState(0);


    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % img_list.length);
    };


    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + img_list.length) % img_list.length);
    };
function BookingBtn(){
  router.push("/GenPDF");
}

    return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.imageColumn}>
            <div className={styles.textname}>{dorm_name}</div>
            <div className={styles.textlo}><Image src="/map.png" alt="Image 1" width={20} height={20} />{locat_name}</div>
          <div className={styles.imageWrapper}>
    <div className={styles.imageContainer} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
      <img className={styles.image} src={img_id} alt={dorm_name} />
        {img_list.map((img_id, index) => (
            <img key={index} className={styles.image} src={img_id} alt={dorm_name} />
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
                    <Image src="/price-tag.png" alt="Image 1" width={30} height={30} />
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
              <button onClick={BookingBtn} className={styles.button}>Booking</button></div>
              
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
                    <div>FREE</div>
                </div>
                <div>

                </div>
            </div>
          </div>
         </div>

            </div>
          </div>
          <Space/>
          <Footer/>
        </div>
 
   
  );
    
}
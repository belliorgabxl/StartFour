import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Space from "@/components/SpaceTab";
import styles from "./home.module.css"
import Link from "next/link";
import { useState,useEffect } from 'react';

const getData = async () => {
  try {
    const res = await fetch("/api/getDors", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    else{
      console.log("Information complete")
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};
export default function Homepage(){
  const [dors, setDors] = useState(null);
  useEffect(() => {
    getData().then((d) => {
      setDors(d);
    });
  }, []);
  return(
    <div className={styles.body}>
      <Navbar/>
      <div className={styles.container}>

      <div className={styles.topic}>
      <h1>ค้นหาที่พักพร้อมสิทธิพิเศษสำหรับสมาชิก จากทั่วทุกมุม</h1> 
      </div>
      <div className={styles.room_function}>
            <div className={styles.room_btn}>
              <Link href="/">Top Range</Link>
            </div>
            <div className={styles.room_btn}>
              <Link href="/">Suggest</Link>
            </div>
            <div></div>
    </div>
    
      <div className={styles.roomcomponents}>
        {dors?.dormitory?.map((d) =>
        <Link href={'/Room/'+ d._id} key={d._id}>
        <div className={styles.roomBox}>
          <div className={styles.imgBox}>
            <img src={d.img} width={400} height={300} alt='img'></img>
          </div>
          <div className={styles.textBox}>

              <div className={styles.textBox1}>
                <div className={styles.dormNameBox}>
                  {d.dorm_name}
                </div>
                <div className={styles.locationBox}>
                  , {d.location}
                </div>
              </div> 

              <div className={styles.priceBox}>
                <div className={styles.price}>
                  {d.price}
                </div>
                <div className={styles.month}>
                  /month
                </div>
              </div> 

              <div className={styles.detailBox}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{d.detail}
              </div> 

              <div className={styles.typeBox}>
                Roomtype:    {d.type}
              </div> 

          </div>
          
        </div>
    </Link>
        )}

      </div>
      </div>
      <Space/>
      <Footer/>
    </div>
  )
}
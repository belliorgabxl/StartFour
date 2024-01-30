import styles from "./suite.module.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from 'next/link';
import { useState,useEffect } from 'react';



const getDors = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/getDors", {
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
export default function Home() {
    const [dors, setDors] = useState(null);
    useEffect(() => {
      getDors().then((d) => {
        setDors(d);
      });
    }, []);

    return (
        
        <div className={styles.body}>
            <Navbar/>
            <div className={styles.container}></div>
            {dors?.dormitory?.map((d) => 
                d.type === 'ห้องสูท' && (
                    <div key={d._id} >
                        <a href ="/RoomType" className={styles.boxgrid}>
                            <div className={styles.boxroomleft}>
                                <div >
                                    <img style={{borderRadius : '20px 0 0 20px'}} src={d.img} width={400} height={350} alt='img'></img>
                                </div>
                                <div className={styles.Text}>
                                    <div className={styles.Texthead} >{d.dorm_name}</div>
                                    <div className={styles.Textlocation}>{d.location}</div>
                                    <div className={styles.Textdetail}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{d.detail}</div>
                                    <div className={styles.icon3}>฿</div>
                                    <div className={styles.price}>{d.price}</div>
                                    <div className={styles.Textprice}>ราคาเริ่มต้น(ต่อเดือน)</div>
                                    <div className={styles.Texttype}>{d.type}</div>
                                    <img className={styles.iconstar} src="/star3.5.png" width={60} height={60}></img>
                                    <img className={styles.iconmap} src="/map.png" width={20} height={20}></img>
                                    <img className={styles.icondetail} src="/detail.png" width={20} height={20}></img>
                                    <div className={styles.Textreview}>ดีมาก</div>
                                </div>
                            </div> 
                        </a>
                    </div>   
                )
            )}
            <Footer/>
        </div>
    )
}
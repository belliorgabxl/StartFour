import Footer from "@/components/Footer"
import styles from "./fan.module.css"
import Link from 'next/link';
import { useState,useEffect } from 'react';
import Navbar from '@/components/Navbar';



const getDors = async () => {
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
                d.type === 'ห้องพัดลม' && (
                    <div key={d._id} >
                        <Link  className={styles.boxgrid} href={"/Room/"+d._id} key={d._id}>
                            <div className={styles.boxroom}>
                              <img style={{borderRadius : '15px 0 0 15px'}} src={d.img} width={400} height={350} alt='img'></img>
                            </div> 
                            <div className={styles.Text}>
                                    <div className={styles.line1}>
                                      <div className={styles.Texthead} >{d.dorm_name}</div>
                                    </div>
                                    <div className={styles.line2}>
                                      <img className={styles.iconstar} src="/star3.5.png" width={60} height={60}></img>
                                      <div className={styles.Textreview}>ดีมาก</div>
                                    </div>
                                    <div className={styles.line3}>
                                      <img className={styles.iconmap} src="/map.png" width={20} height={20}></img>
                                      <div className={styles.Textlocation}>{d.location}</div>
                                    </div>
                                    <div className={styles.line4}>
                                      <div className={styles.Texttype}>{d.type}</div>
                                    </div>
                                    <div className={styles.line5}>
                                      <img className={styles.icondetail} src="/detail.png" width={20} height={20}></img>
                                      <div className={styles.Textdetail}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{d.detail}</div>
                                    </div>
                                    <div className={styles.line6}>
                                      <div className={styles.icon3}>฿</div>
                                      <div className={styles.price}>{d.price}</div>
                                    </div>
                                    <div className={styles.line7}>
                                      <div className={styles.Textprice}>ราคาเริ่มต้น(ต่อเดือน)</div>
                                    </div>
    
                                </div>
                        </Link>
                    </div>   
                )
            )}
            <Footer/>
        </div>
    )
}
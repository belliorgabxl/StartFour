import Image from 'next/image';
import styles from "../styles/Home.module.css"
import Navbar from '@/components/Navbar';
import Map from "@/components/MapServerside"
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
    <div className={styles.container}>
      <div className={styles.homeimg}>
        <Image src="/condo_homepage.jpg" width={1239} height={350} alt="img"/>
      </div>
      <div className={styles.map}>
            <div className={styles.mapfunction}>

                      <div></div>
              
                <span className={styles.mapfunction1}><Link href="#">
                      LOCATION<br/>
                      <b>Ladkrabang ,1112</b> </Link>
                </span>
             

                      <div></div>

              <div className={styles.mapfunction2}>
                <div></div>
                <Link href="#">
                <div>EXPOLOR MORE </div> </Link><Link href="#">
                <Image src="/Building.png" width={40} height={40} alt='logo'></Image>
                </Link>
                <div></div>
                </div>

                        <div></div>

              <Link href="#">
                    <div className={styles.mapfunction3}>
                      see all
                    </div>
              </Link>

                <div></div>

            </div>

            <div className={styles.mapclass}>
               <Map/>
            </div>
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
        <h1>Room components</h1>

        {dors?.dormitory?.slice(20).map((d) =>
        <div key={d._id}>
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
    </div>
        )}



    
      </div>

      <div>
        room recomment
      </div>
      <Link href="/pages/test"> <h1>WEB TEST</h1></Link>
        <hr/> 
        <Link href="/pages/test2"> <h1>POST TEST</h1></Link>
    </div>
   </div>
  )
}

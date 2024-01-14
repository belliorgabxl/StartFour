import Image from 'next/image';
import styles from "../styles/Home.module.css"
import Navbar from '@/components/Navbar';
import dynamic from "next/dynamic";
import Link from 'next/link';
import { useState,useEffect } from 'react';

const Map = dynamic(() => import("@/components/MarkerMap/map"), {
  ssr: false,
});


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
  const [searchlocat, setSearchLocat] = useState("");

  const handleSearch = (e) => {
    setSearchLocat(e.target.value);
  };

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
        <Image src="/Homepage.jpg" width={1379} height={400} alt="img"/>
      </div>
        <div className={styles.searchBox}>
              <input
                className={styles.searchInput}
                type="text"
                placeholder="Search Dormitory name or Location"
                onChange={handleSearch}
                value={searchlocat}
              />
                <Link class={styles.searchButton} href="/NearMe">
                  <Image src="/scicon.png" width={25} height={25} alt="img"/>
                </Link>
        </div>

        <div className={styles.map}> 
          <Map searchlocat={searchlocat} />
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

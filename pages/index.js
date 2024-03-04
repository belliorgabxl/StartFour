import Image from 'next/image';
import styles from "../styles/Home.module.css"
import Navbar from '@/components/Navbar';
import dynamic from "next/dynamic";
import Link from 'next/link';
import { useState,useEffect } from 'react';
import Footer from '@/components/Footer';

const Map = dynamic(() => import("@/components/MarkerMap/map"), {
  ssr: false,
});
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
                <Link className={styles.searchButton} href="/NearMe">
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
        {dors?.dormitory?.map((d) =>
        <div key={d._id} className={styles.frameBox}>
        <div className={styles.roomBox}>
          <div className={styles.imgBox}>
            <img src={d.img} width={200} height={150} alt='img'></img>
          </div>
          <div className={styles.textBox}>

              <div className={styles.textBox1}>
                <Link  className={styles.dormNameBox} href={"/Room/"+d._id} key={d._id}>
                 {d.dorm_name}
                </Link>
                <div className={styles.locationBox}>
                  , {d.location.slice(0,25)+"..."}
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
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{d.detail.slice(0,70)+"...."}
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
      </div>
    </div>
    <Footer/>
   </div>
  )
}
